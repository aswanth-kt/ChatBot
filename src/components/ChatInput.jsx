import React, { useState } from "react";

function ChatInput(props) {

  const [inputText, setInputText] = useState("")

  const saveInputText = (event) => {
    setInputText(event.target.value);
  };

  const messageHandler = () => {
    props.setChatMessages([
      ...props.chatMessages, 
      {
        id: crypto.randomUUID(),
        message: inputText,
        sender: "user",
      }
    ]);
    setInputText("");
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Type your queries..." 
        onChange={saveInputText} 
        value={inputText} 
      />
      <button onClick={messageHandler}>Send</button>
    </div>
  );
}

export default ChatInput;
