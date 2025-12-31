import { useState } from "react"
import ChatInput from "./components/ChatInput"
import Message from "./components/message"

function App() {
  
  const [chatMessages, setChatMessages] = useState([])

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
