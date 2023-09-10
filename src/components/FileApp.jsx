import FileSwitcher from "./FileSwitcher.jsx"
import SourceDocList from "./SourceDocList.jsx"
import CentralDocList from "./CentralDocList.jsx"

import { useState, useEffect, useRef } from "react"
import "../document.css"
import Document from "./CentralDocument.jsx"
import SourceDocument from "./SourceDocument.jsx"
import FileUploader from "./FileUploader.jsx"
import axios from 'axios';


function FileApp({ sourceDocs, appendDocs, handleCheckboxChange , handleFileUpload }) {
  const [dispDoc, setDispDoc] = useState(null)

  // const [selectedDoc, setSelectedDoc] = useState([])

  function handleToggleClick(id, content) {
    //setDispDoc(id)
    saveCentralFile(id, content)
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
      }
  }

  async function handleRetrieve(fileName) {
      try {
          const response = await retrieveSourceFile(fileName)  // API CALL
          setDispDoc(response)
      } catch (err) {
          console.error('Error fetching messages:', err)
      }
  }

  async function saveCentralFile(fileName, content) {
    try {
      const postData = {
        "filename": fileName,
        "content": content,
        "doc_type": "central_doc"
      }
      const response = await axios.post(`${process.env.REACT_APP_URL}/update_document`, postData)
      console.log("saving")
    } catch (error) {
      console.error('There was an error!', error)
    }
  }
  
  return (
    <>
      <div className="file-app">
        <div className="doclist-section">
          <CentralDocList docs={sourceDocs.filter(x => x.doc_type === "central_doc")} appendDocs={appendDocs} onCheckboxChange={handleCheckboxChange} onButtonPress={handleToggleClick} className="top-doclist" />
          <SourceDocList docs={sourceDocs.filter(x => x.doc_type === "source_doc")} onCheckboxChange={handleCheckboxChange} onButtonPress={handleToggleClick} handleFileUpload={handleFileUpload} className="bottom-doclist" />
        </div>
        <FileSwitcher dispDoc={dispDoc} selectedDocs={sourceDocs.filter(x => x.checked)} handleFileUpload={handleFileUpload} className="document-box" retrieveFile={retrieveSourceFile} saveFile = {saveCentralFile}/>
      </div>
    </>
  )
}

export default FileApp