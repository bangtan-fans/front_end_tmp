import { useState, useEffect, useRef } from "react"
import ChatboxHistory from "./ChatboxHistory.jsx"
import Chatbox from "./Chatbox.jsx"

function ChatApp({ state }) {
  const [chats, setChats] = useState([])
  const [selectedChatID, setSelectedChatID] = useState(null)
  const [selectedMessages, setSelectedMessages] = useState([])

  useEffect(() => {
    async function fetchChats() {
      try {
        // const chatList = await getAllIDs()  // API CALL
        const chatList = [{chatID: "12345", chatName: "somechat"}]  // TEMP DATA
        setChats(chatList)
      } catch (err) {
        console.error('Error fetching chats:', err)
      }
    }
    fetchChats()
  }, [])

  async function handleChatClick(chatID) {
    try {
      // const msgs = await getAllMessages(chatID)  // API CALL
      const msgs = [{name: "taylor", message: "swift"}]  // TEMP DATA
      setSelectedMessages(msgs)
      setSelectedChatID(chatID)
    } catch (err) {
      console.error('Error fetching messages:', err)
    }
  }

  // const handleSendMessage = async (message) => {
  //   try {
  //     await sendMessage(selectedChatID, message)  // API CALL
  //     // Fetch updated messages after sending a new one

  //     const updatedMessages = await getAllMessages(selectedChatID)
  //     setSelectedMessages(updatedMessages)
  //   } catch (err) {
  //     console.error('Error sending message:', err)
  //   }
  // }

  return (
    <div className="chat-app">
      {selectedChatID && <Chatbox state={selectedMessages} className="chatbox-history" />}
      <ChatboxHistory chats={chats} onSelectChat={handleChatClick} className="chatbox" />
    </div>
  )
}

export default ChatApp