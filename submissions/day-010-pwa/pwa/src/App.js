import React from "react";
import "antd/dist/antd.css";

import "./App.css";
import { Button, notification } from "antd";
import * as serviceWorker from "./serviceWorker";
import * as chroma from "chroma-js";

let waitingWorker = null;

const key = `update-dialog`;
const reloadApp = async () => {
  notification.close(key);
  window.location.reload();
  try {
    if (!waitingWorker) {
      const registration = await navigator.serviceWorker.ready;
      waitingWorker = registration.waiting;
    }
    waitingWorker.postMessage({ type: "SKIP_WAITING" });
  } catch {}
};

const openNotification = () => {
  const btn = (
    <Button type="primary" size="small" onClick={reloadApp}>
      Reload
    </Button>
  );
  notification.open({
    message: "Update available",
    description: "An update for this application is available.",
    duration: 0,
    btn,
    key,
  });
};

const backgroundColor = chroma.hsl(Math.random() * 360, 0.5, 0.8);
const color = "#111";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: 50,
        backgroundColor,
        color,
      }}
    >
      <h1>Service Worker experiments</h1>
      <Button onClick={openNotification}>Trigger update dialog</Button>
    </div>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: (reg) => {
    waitingWorker = reg.waiting;
    openNotification();
  },
});

export default App;
