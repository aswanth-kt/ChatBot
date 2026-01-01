import React, { useState } from "react";
import "./chatInput.css";

function ChatInput(props) {

  const [inputText, setInputText] = useState("")

  const saveInputText = (event) => {
    setInputText(event.target.value);
  };

  const messageHandler = () => {
    const newChatMessages = [
      ...props.chatMessages, 
      {
        id: crypto.randomUUID(),
        message: inputText,
        sender: "user",
      }
    ]
    props.setChatMessages(newChatMessages);

    // Clear text values after sendeing.
    setInputText("");

    // Robot responce
    const robotResponce = Chatbot.getResponse(inputText); // get the external responce

    props.setChatMessages([
      ...newChatMessages, 
      {
        id: crypto.randomUUID(),
        message: robotResponce,
        sender: "robot",
      }
    ]);

  };

  return (
    <div className="chat-input-container">
      <input 
        type="text" 
        placeholder="Type your queries..." 
        onChange={saveInputText} 
        value={inputText} 
        className="chat-input"
      />
      <button 
        onClick={messageHandler}
        className="send-btn"
      >Send</button>
    </div>
  );
}

export default ChatInput;
