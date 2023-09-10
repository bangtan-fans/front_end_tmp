import { useState, useEffect, useRef } from "react"
import ChatboxHistory from "./ChatboxHistory.jsx"
import Chatbox from "./Chatbox.jsx"
import axios from 'axios';

function ChatApp({ state, filteredDocs }) {
  const [chats, setChats] = useState([])
  const [selectedChatID, setSelectedChatID] = useState(null)
  const [selectedMessages, setSelectedMessages] = useState([])

  useEffect(() => {  // I have no idea how this works
    //console.log("FDFD", filteredDocs)
  }, [state, filteredDocs])

  async function getAllIDs() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/get_all_ids`)
        return response.data
    } catch (error) {
        console.error('Error fetching messages:', error)
        throw error
    }
  }

  useEffect(() => {
    async function fetchChats() {
      try {
        const chatList = await getAllIDs()
        setChats(chatList)
      } catch (err) {
        console.error('Error fetching chats:', err)
      }
    }
    fetchChats()
  }, [])

  async function getAllMessages(chatID) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/get_all_messages/${chatID}`)
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

  async function sendMessage(chatID, message, filteredDocs) {
    console.log("TRIES TO SEND", chatID, message, filteredDocs.map(x => x.name))
    try {
      const postData = {
        "chat_id": chatID,
        "prompt": message,
        "documents_list": filteredDocs.map(x => x.name)
      }
      console.log(postData)
      console.log("trying to make request now")
      const response = await axios.post(`${process.env.REACT_APP_URL}/submit_prompt`, postData)
      console.log(response.data)
    } catch (error) {
      console.error('There was an error!', error)
    }
  }

  async function handleSendMessage(message) {
    try {
      await sendMessage(selectedChatID, message, filteredDocs)  // API CALL
      // Fetch updated messages after sending a new one

      const updatedMessages = await getAllMessages(selectedChatID)
      setSelectedMessages(updatedMessages)
    } catch (err) {
      console.error('Error sending message:', err)
    }
  }

  async function createChat() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/new_chat`)
      console.log("res", response)
      setChats(prevChats => [...prevChats, {"name": "Untitled", "id": response.data.new_chat_id}])
    } catch (error) {
      console.error('Error creating new chat:', error)
      throw error
    }
  }

  async function handleNewChat() {
    try {
      await createChat()
    } catch (err) {
      console.error("Error creating new chat:", err)
    }
  }

  async function deleteChat(chatID) {
    try {
      console.log("tries to delete")
      const response = await axios.delete(`${process.env.REACT_APP_URL}/delete_chat_id/${chatID}`);

      if (response.status === 200) {
        console.log('Successfully deleted item:', chatID);

        // Optionally, you can also update your local state after successful deletion:
        setChats(prevChats => prevChats.filter(item => item.id !== chatID));
      } else {
        console.error('Failed to delete item. Response:', response);
      }

    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  async function handleDeleteChat(chatID) {
    try {
      console.log("gets here")
      await deleteChat(chatID)
    } catch (err) {
      console.error("Error deleting chat:", err)
    }
  }

  return (
    <div className="chat-app">
      {selectedChatID && <Chatbox messageState={selectedMessages} handleSendMessage={handleSendMessage} className="chatbox-history" />}
      <ChatboxHistory chats={chats} onSelectChat={handleChatClick} handleNewChat={handleNewChat} handleDeleteChat={handleDeleteChat} className="chatbox" />
    </div>
  )
}

export default ChatApp