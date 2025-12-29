import React from "react";
import userLogo from "../assets/user-logo.png";
import botLogo from "../assets/chatbot-logo.avif";

function Message(props) {
console.log("Message:", props.chatMessages);

    return (
      <>
        {props.chatMessages.map((chatMessage) => {
            return(
                <div key={chatMessage.id}>
                    {chatMessage.sender === "user" && (
                        <img src={userLogo} alt="user-lgo" width={20} />
                    )}
                    {chatMessage.message}
                    {chatMessage.sender === "robot" && (
                        <img src={botLogo} alt="bot" width={30} />
                    )}
                </div>
            )
        })}
      </>
    );
}

export default Message;