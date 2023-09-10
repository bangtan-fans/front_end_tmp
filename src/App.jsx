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
        return {checked: !x.checked, name: x.name, doc_type: x.doc_type}
      }
      return x
    }))
  }

  async function getAllSourceDocs() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/get_all_documents`)
        console.log(response.data)
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
        console.log(allDocsList)
        setSourceDocs(allDocsList.map((x) => ({name: x.filename, checked: false, doc_type: x.doc_type, content: x.content})))  // TODO: might be problematic
      } catch (err) {
        console.error('Error fetching chats:', err)
      }
    }
    fetchSourceDocs()
  }, [])

  async function handleFileUpload(fileName, fileText) {
    console.log("trying to send", fileName, fileText)
    try {
        const postData = {
          "filename": fileName,
          "content": fileText,
          "doc_type": "source_doc"
        }
        console.log("trying to make request now")
        const response = await axios.post(`${process.env.REACT_APP_URL}/add_document`, postData)
        setSourceDocs(prevSourceDocs => [...prevSourceDocs, {name: fileName, content: fileText, checked: false, doc_type: "source_doc"}])
    } catch (error) {
        console.error('There was an error!', error)
    }
  }


  return (
    <>
      <div className="container">
        <div className="side-div">
          <FileApp sourceDocs={sourceDocs} handleCheckboxChange={handleCheckboxChange} handleFileUpload={handleFileUpload} />
        </div>
        <div className="side-div">
          <ChatApp filteredDocs={sourceDocs.filter(x => x.checked === true)} />
        </div>
      </div>
    </>
  )
}

export default App