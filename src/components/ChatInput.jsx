import React, { useEffect, useState } from "react";
import "./chatInput.css";
import { Chatbot } from "../botFunction/chatbot.js";

function ChatInput(props) {

  const [inputText, setInputText] = useState("")

  const saveInputText = (event) => {
    setInputText(event.target.value);
  };

  const messageHandler = async (e) => {
    // console.log("e:", e)
    if (e.key === "Enter" || e.type === "click") {
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
      const robotResponce = await Chatbot.getResponseAsync(inputText); 

      props.setChatMessages([
        ...newChatMessages, 
        {
          id: crypto.randomUUID(),
          message: robotResponce,
          sender: "robot",
        }
      ]);
    }
  };

  return (
    <div className="chat-input-container">
      <input 
        type="text" 
        placeholder="e.g. flip a coin" 
        onChange={saveInputText} 
        value={inputText} 
        className="chat-input"
        onKeyDown={messageHandler}
      />
      <button 
        onClick={messageHandler}
        className="send-btn"
      >Send</button>
    </div>
  );
}

export default ChatInput;
