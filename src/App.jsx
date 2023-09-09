import './App.css'
import Chatbox from "./components/Chatbox.jsx"
// import Document from "./components/Document.jsx"
// import FileUploader from "./components/FileUploader.jsx"
import FileApp from "./components/FileApp.jsx"
import ChatApp from "./components/ChatApp.jsx"


import { useState, useEffect } from "react"

function App() {
  return (
    <>
      <div className="container">
        <div className="side-div">
          <FileApp />
        </div>
        <div className="side-div">
          <ChatApp />
        </div>
      </div>
    </>
  )
}

export default App