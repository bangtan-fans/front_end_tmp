import './App.css'
import Chatbox from "./components/Chatbox.jsx"
// import Document from "./components/Document.jsx"
// import FileUploader from "./components/FileUploader.jsx"
import FileApp from "./components/FileApp.jsx"
import ChatApp from "./components/ChatApp.jsx"
import axios from 'axios'

import { useState, useEffect } from "react"


function App() {
  const [sourceDocs, setSourceDocs] = useState([])
  const [filteredDocs, setFilteredDocs] = useState([])

  function handleCheckboxChange(id) {
    setSourceDocs(sourceDocs.map((x) => {
      if (x.name === id) {
        return {name: x.name, checked: !x.checked}
      }
      return x
    }))
  }

  async function getAllSourceDocs() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/get_all_source_documents`)
        return response.data
    } catch (error) {
        console.error('Error fetching messages:', error)
        throw error
    }
  }

  useEffect(() => {
    async function fetchSourceDocs() {
      try {
        const allDocsList = await getAllSourceDocs()  // API CALL
        setSourceDocs(allDocsList.map((x) => ({name: x, checked: false})))  // TODO: might be problematic
      } catch (err) {
        console.error('Error fetching chats:', err)
      }
    }
    fetchSourceDocs()
  }, [])
  return (
    <>
      <div className="container">
        <div className="side-div">
          <FileApp sourceDocs={sourceDocs} handleCheckboxChange={handleCheckboxChange} />
        </div>
        <div className="side-div">
          <ChatApp filteredDocs={sourceDocs.filter(x => x.checked === true)} />
        </div>
      </div>
    </>
  )
}

export default App