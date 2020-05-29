import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase";
import { Button, Card, Row, Col, Form, Input } from "antd";
import { useLocalState } from "./useLocalState";
import { List } from "antd";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo();
type Message = { title: string; body: string; receivedAt: Date };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CM_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey(
  process.env.REACT_APP_FIREBASE_CM_KEYPAIR_PUBLIC ?? ""
);

function setTokenRefreshHandler(setToken: (token: string) => void) {
  // Callback fired if Instance ID token is updated.
  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then(() => window.location.reload())
      .catch((err) => {
        console.log("Unable to retrieve refreshed token ", err);
      });
  });
}

function setOnMessageReceivedHandler(
  messages: Message[],
  setMessages: (messagesJson: string) => void
) {
  messaging.onMessage(function (payload) {
    console.log("Message received. ", payload);
    const notification = JSON.parse(payload.data.notification);
    messages.push({
      title: notification.title,
      body: notification.body,
      receivedAt: new Date(),
    });
    setMessages(JSON.stringify({ messages }));
  });
}

function getToken(callback: (granted: boolean, token: string) => void) {
  messaging
    .getToken()
    .then((currentToken) => {
      if (currentToken) {
        callback(true, currentToken);
      } else {
        callback(false, currentToken);
      }
    })
    .catch((err) => {
      callback(false, "");
    });
}

function requestPermissionForNotification(
  callback: (granted: boolean) => void
) {
  messaging.requestPermission().then(() => getToken(callback));
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function App() {
  const [permissionGranted, setPermissionGranted] = useState(
    Notification.permission === "granted"
  );
  const [token, setToken] = useState("");
  const [messagesString, setMessages] = useLocalState("fcm-tester-data", "[]");
  const messages: Message[] = JSON.parse(messagesString).messages ?? [];
  const [form] = Form.useForm();
  useEffect(() => {
    if (permissionGranted) {
      getToken((granted: boolean, token: string) => {
        setPermissionGranted(granted);
        setToken(token);
      });
    }
    setTokenRefreshHandler(setToken);
  }, [permissionGranted]);

  useEffect(() => {
    setOnMessageReceivedHandler(messages, setMessages);
  }, [messages, setMessages]);

  const onFinish = async (values: any) => {
    await fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        Authorization: `key=${process.env.REACT_APP_FIREBASE_SERVER_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          notification: {
            title: values.title,
            body: values.body,
          },
        },
        to: values.recipient,
      }),
    });
    form.resetFields();
  };

  return (
    <Row style={{ marginTop: 50 }}>
      <Col span={16} offset={4}>
        <h1>FCM Tester</h1>
        {permissionGranted ? (
          <Card
            size="small"
            title="Your token"
            style={{ wordBreak: "break-all" }}
          >
            {token}
          </Card>
        ) : (
          <Card
            size="small"
            title="Notification permission required"
            style={{ wordBreak: "break-all" }}
          >
            <Button
              type="primary"
              onClick={() =>
                requestPermissionForNotification((granted: boolean) =>
                  setPermissionGranted(granted)
                )
              }
            >
              Give permission
            </Button>
          </Card>
        )}

        <Card size="small" title="Send message" style={{ marginTop: 30 }}>
          <Form
            {...layout}
            form={form}
            initialValues={{ recipient: token }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Recipient"
              name="recipient"
              rules={[{ required: true, message: "Please enter a recipient." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please enter a title." }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Body"
              name="body"
              rules={[{ required: true, message: "Please enter a body." }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Send message
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card size="small" title="Received messages" style={{ marginTop: 30 }}>
          <List
            itemLayout="horizontal"
            dataSource={messages.reverse()}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<strong>{item.title}</strong>}
                  description={item.body}
                />
                <div>{timeAgo.format(new Date(item.receivedAt))}</div>
              </List.Item>
            )}
          />
          <Button type="ghost" onClick={() => setMessages('{"messages":[]}')}>
            Clear messages
          </Button>
        </Card>
      </Col>
    </Row>
  );
}

export default App;
