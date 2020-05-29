importScripts("https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.5/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCwCBTfKit0gS-R2H5lvZezH2LyBycqN-I",
  authDomain: "fcm-web-messenger.firebaseapp.com",
  databaseURL: "https://fcm-web-messenger.firebaseio.com",
  projectId: "fcm-web-messenger",
  storageBucket: "fcm-web-messenger.appspot.com",
  messagingSenderId: "695636325796",
  appId: "1:695636325796:web:b07baea348e82bb9083d31",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notification = JSON.parse(payload.data.notification);
  // Customize notification here
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: "/logo-192.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
