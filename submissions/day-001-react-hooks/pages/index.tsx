import React, { useState } from "react";

export const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  return (
    <>
      <div>
        <input
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
            setHistoryList([...historyList, event.target.value]);
          }}
          placeholder="Enter Some Text"
        />
      </div>
      {inputText}
      <hr />
      <br />
      {historyList.map((h) => (
        <div>{h}</div>
      ))}
    </>
  );
};

export default InputElement;
