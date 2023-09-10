import FileSwitcher from "./FileSwitcher.jsx"
import SourceDocList from "./SourceDocList.jsx"
import CentralDocList from "./CentralDocList.jsx"

import { useState, useEffect, useRef } from "react"
import "../document.css"
import Document from "./CentralDocument.jsx"
import SourceDocument from "./SourceDocument.jsx"
import FileUploader from "./FileUploader.jsx"
import axios from 'axios';



function FileApp({ sourceDocs, handleCheckboxChange }) {
  
  const [dispDoc, setDispDoc] = useState(null)

  // const [selectedDoc, setSelectedDoc] = useState([])

  function handleToggleClick(id) {
    //setDispDoc(id)
    handleRetrieve(id)
  }

  useEffect(() => {
    console.log("dd", dispDoc)
  }, [dispDoc])

  async function retrieveSourceFile(fileName) {
      try {
          const response = await axios.get(`${process.env.REACT_APP_URL}/get_document/${fileName}`)
          return response.data
      } catch (error) {
          console.error('Error fetching messages:', error)
          //throw error
      }
  }

  async function handleRetrieve(fileName) {
      try {
          const response = await retrieveSourceFile(fileName)  // API CALL
          // const msgs = [{name: "taylor", message: "swift"}]  // TEMP DATA
          setDispDoc(response)
          // setSelectedChatID(chatID)
          console.log("state is now", dispDoc)
      } catch (err) {
          console.error('Error fetching messages:', err)
      }
  }

  return (
    <>
      <div className="file-app">
        <div className="doclist-section">
          <CentralDocList docs={sourceDocs.filter(x => x.doc_type === "central_doc")} onCheckboxChange={handleCheckboxChange} onButtonPress={handleToggleClick} className="top-doclist" />
          <SourceDocList docs={sourceDocs.filter(x => x.doc_type === "source_doc")} onCheckboxChange={handleCheckboxChange} onButtonPress={handleToggleClick} className="bottom-doclist" />
        </div>
        <FileSwitcher dispDoc={dispDoc} selectedDocs={sourceDocs.filter(x => x.checked)} className="document-box" />
      </div>
    </>
  )
}

export default FileApp