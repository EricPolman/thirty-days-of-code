import React, { useState } from "react";
import "./App.css";

import { Modal } from "./Modal";

function App() {
  const [usePortal, setUsePortal] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div className="App" style={{ backgroundColor: "red" }}>
      <button onClick={() => setUsePortal(!usePortal)}>
        {usePortal ? "Don't use " : "Use"} portal
      </button>
      <button onClick={() => setShowModal(true)}>Open modal</button>
      <div>
        {showModal && (
          <Modal
            title="Demo Modal"
            usePortal={usePortal}
            onClose={() => setShowModal(false)}
            onConfirm={() => {
              setCounter(counter + 1);
              setShowModal(false);
            }}
          >
            <p>This is the body of the modal</p>
          </Modal>
        )}
      </div>
      <div>Confirms pressed: {counter}</div>
      <img src="https://placehold.it/500x500/" />
    </div>
  );
}

export default App;
