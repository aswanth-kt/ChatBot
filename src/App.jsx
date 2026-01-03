import { useState } from "react"
import ChatInput from "./components/ChatInput"
import Message from "./components/Message"
import "./app.css";

function App() {
  
  const [chatMessages, setChatMessages] = useState([])

  return (
    <div className="app-container">
      <Message 
        chatMessages={chatMessages} 
      />
      <ChatInput 
        chatMessages={chatMessages} 
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
