import './App.css'
import Chatbox from "./components/Chatbox.jsx"
//import Document from "./components/Document.jsx"
// import FileUploader from "./components/FileUploader.jsx"
import FileSwitcher from "./components/FileSwitcher.jsx"
import ChatApp from "./components/ChatApp.jsx"


import { useState, useEffect } from "react"

function App() {
  return (
    <>
      <div className="container">
        <div className="side-div">
          <FileSwitcher />
        </div>
        <div className="side-div">
          {/*<button onClick={handleClickUpload}>Upload Text File</button>
          {showUploader && <FileUploader onUpload={handleUpload} />}*/}
          {/* <FileUploader onUpload={(text, name) => handleUpload(text, name)} />
          <div style={{ marginLeft: '10px', display: 'flex', gap: '10px' }}>
            {docNames.map((name, index) => <span key={index}>{name}</span>)}
          </div> */}
          {/*<Chatbox />*/}
          <ChatApp />
        </div>
      </div>
    </>
  )
}

export default App