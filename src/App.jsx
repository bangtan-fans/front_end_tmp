import './App.css'
import Chatbox from "./components/Chatbox.jsx"
import Document from "./components/Document.jsx"
import FileUploader from "./components/FileUploader.jsx"
import ChatApp from "./components/ChatApp.jsx"

import { useState, useEffect } from "react"

function App() {
  const [docTexts, setDocTexts] = useState([])  // Saves all of the document text which has been uploaded so far
  const [docNames, setDocNames] = useState([])
  const [showUploader, setShowUploader] = useState(false)  // Toggle open source document upload area

  function handleUpload(text, docName) {
    setDocTexts(prevDocTexts => [...prevDocTexts, text])
    setDocNames(prevDocNames => [...prevDocNames, docName])
  }

  function handleClickUpload() {
    setShowUploader(!showUploader)
  }

  return (
    <>
      <div className="container">
        <div className="side-div">
          <Document />
        </div>
        <div className="side-div">
          {/*<button onClick={handleClickUpload}>Upload Text File</button>
          {showUploader && <FileUploader onUpload={handleUpload} />}*/}
          {/*<FileUploader onUpload={(text, name) => handleUpload(text, name)} />
          <div style={{ marginLeft: '10px', display: 'flex', gap: '10px' }}>
            {docNames.map((name, index) => <span key={index}>{name}</span>)}
          </div>*/}
          {/*<Chatbox />*/}
          <ChatApp />
        </div>
      </div>
    </>
  )
}

export default App