import React, { useEffect, useRef } from "react";
import userLogo from "../assets/user-logo.png";
import botLogo from "../assets/chatbot-logo2.jpg";
import "./message.css"

function Message(props) {
  const chatMessageRef = useRef(null)
  useEffect(() => {
    const messageContainerElem = chatMessageRef.current;
    messageContainerElem.scrollTop = messageContainerElem.scrollHeight;
    console.log("useEffect:", chatMessageRef.current)
  },[props.chatMessages])
  return (
    <div className="chat-message-container" ref={chatMessageRef}>
      {props.chatMessages.map((chatMessage) => {
        return (
          <div key={chatMessage.id}
            className={chatMessage.sender === "user" 
              ? "chat-message-user"
              : "chat-message-robot"
            }
            >
              {chatMessage.sender === "robot" && chatMessage.message !== '' && (
                <img src={botLogo} alt="bot" width={55} />
              )}

              <div className="chat-message-text">
                {chatMessage.message}
              </div>

              {chatMessage.sender === "user" && chatMessage.message && (
                <img src={userLogo} alt="user-lgo" width={35} />
              )}
          </div>
        );
      })}
    </div>
  );
}

export default Message;
