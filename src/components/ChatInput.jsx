import React from 'react'

function ChatInput(props) {
  const messageHandler = () => {
    props.setChatMessages([...props.chatMessages,
      {
        id: crypto.randomUUID(),
        message: "test",
        sender: "user",
      }
    ])
  };

  return (
    <div>
        <input type="text" />
        <button onClick={messageHandler} >Send</button>
    </div>
  )
}

export default ChatInput