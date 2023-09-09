import { useState, useEffect, useRef } from "react"
import ChatboxHistory from "./ChatboxHistory.jsx"
import Chatbox from "./Chatbox.jsx"
import axios from 'axios';

function ChatApp({ state }) {
  const [chats, setChats] = useState([])
  const [selectedChatID, setSelectedChatID] = useState(null)
  const [selectedMessages, setSelectedMessages] = useState([])

  async function getAllIDs() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/get_all_ids`)
        console.log(response)
        return response.data
    } catch (error) {
        console.error('Error fetching messages:', error)
        throw error
    }
  }

  useEffect(() => {
    async function fetchChats() {
      try {
        const chatList = await getAllIDs()  // API CALL
        // const chatList = [{chatID: "12345", chatName: "somechat"}]  // TEMP DATA
        setChats(chatList)
      } catch (err) {
        console.error('Error fetching chats:', err)
      }
    }
    fetchChats()
  }, [])

  async function getAllMessages(chatID) {
    try {
      console.log(chatID)
      const response = await axios.get(`${process.env.REACT_APP_URL}/get_all_messages/${chatID}`)
      console.log("res",response)
      return response.data
    } catch (error) {
      console.error('Error fetching messages:', error)
      throw error
    }
  }

  async function handleChatClick(chatID) {
    try {
      console.log("CLICKED CHAT", chatID)
      const msgs = await getAllMessages(chatID)  // API CALL
      // const msgs = [{name: "taylor", message: "swift"}]  // TEMP DATA
      setSelectedMessages(msgs)
      setSelectedChatID(chatID)
    } catch (err) {
      console.error('Error fetching messages:', err)
    }
  }

  async function sendMessage(chatID, message) {
    console.log("TRIES TO SEND", chatID, message)
    try {
      const postData = {
        "chat_id": chatID,
        "prompt": message
      }
      console.log("trying to make request now")
      const response = await axios.post(`${process.env.REACT_APP_URL}/submit_prompt`, postData)
      console.log(response.data)
    } catch (error) {
      console.error('There was an error!', error)
    }
  }

  async function handleSendMessage(message) {
    try {
      await sendMessage(selectedChatID, message)  // API CALL
      // Fetch updated messages after sending a new one

      const updatedMessages = await getAllMessages(selectedChatID)
      setSelectedMessages(updatedMessages)
    } catch (err) {
      console.error('Error sending message:', err)
    }
  }

  return (
    <div className="chat-app">
      {selectedChatID && <Chatbox messageState={selectedMessages} handleSendMessage={handleSendMessage} className="chatbox-history" />}
      <ChatboxHistory chats={chats} onSelectChat={handleChatClick} className="chatbox" />
    </div>
  )
}

export default ChatApp