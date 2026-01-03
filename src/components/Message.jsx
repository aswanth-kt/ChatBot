import React, { useEffect, useRef } from "react";
import userLogo from "../assets/user-logo.png";
import botLogo from "../assets/chatbot-logo2.jpg";
import "./message.css"

function Message(props) {
  const chatMessageRef = useRef(null)

  useEffect(() => {
    // console.log("useEffect:", chatMessageRef.current)
    const messageContainerElem = chatMessageRef.current;
    messageContainerElem.scrollTop = messageContainerElem.scrollHeight;
  },[props.chatMessages]);
  
  return (
    <div className="chat-message-container" ref={chatMessageRef}>
      {
      props.chatMessages.length === 0 
        // ? <div className="available-command">
        //   <h4>Available commands:</h4>
        //   <h5>hello | flip a coin | roll a dice | today's date | thanks</h5>
        // </div>

        ?<div className="available-commands">
          <div className="line">$ help</div>
          <span className="line"> Commands:</span>
          <span className="line">  hello</span>
          <span className="line"> | flip a coin</span>
          <span className="line"> | roll a dice</span>
          <span className="line"> | today's date</span>
          <span className="line"> | thanks</span>
        </div>
        : ""
      }
      {props.chatMessages.map((chatMessage) => {
        return (
          <div key={chatMessage.id}
            className={chatMessage.sender === "user" 
              ? "chat-message-user"
              : "chat-message-robot"
            }
            >
              {chatMessage.sender === "robot" && (
                <img src={botLogo} alt="bot" width={55} />
              )}
              {
                chatMessage.message && (
                  <div className="chat-message-text">
                    {chatMessage.message}
                  </div>
                ) 
              }

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
