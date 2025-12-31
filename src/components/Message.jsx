import React from "react";
import userLogo from "../assets/user-logo.png";
import botLogo from "../assets/chatbot-logo.avif";

function Message(props) {
  return (
    <>
      {props.chatMessages.map((chatMessage) => {
        return (
          <div key={chatMessage.id}>
            {chatMessage.sender === "user" && chatMessage.message && (
              <img src={userLogo} alt="user-lgo" width={20} />
            )}
            {chatMessage.message}
            {chatMessage.sender === "robot" && chatMessage.message !== '' && (
              <img src={botLogo} alt="bot" width={30} />
            )}
          </div>
        );
      })}
    </>
  );
}

export default Message;
