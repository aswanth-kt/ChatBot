import { useState } from "react"
import ChatInput from "./components/ChatInput"
import Message from "./components/message"

function App() {
  const dummyChat = [{
        id: 1,
        message: "Hello",
        sender: "user"
    }, {
        id: 2,
        message: "Hii, What can I help you?",
        sender: "robot"
    }, {
        id:3,
        message: "I have a doubt!",
        sender: "user"
    }, {
        id: 4,
        message: "Please ask",
        sender: "robot"
    }];
  const [chatMessages, setChatMessages] = useState(dummyChat)

  return (
    <>
      <ChatInput 
        chatMessages={chatMessages} 
        setChatMessages={setChatMessages} 
      />
      <Message 
        chatMessages={chatMessages} 
      />
    </>
  )
}

export default App
