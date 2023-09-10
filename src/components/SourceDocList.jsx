

import Checkbox from "./Checkbox.jsx"
import { useState, useEffect } from "react"
import "../document.css"
import Document from "./CentralDocument.jsx"
import SourceDocument from "./SourceDocument.jsx"
import FileUploader from "./FileUploader.jsx"
import axios from 'axios';


function SourceDocList({ docs, onCheckboxChange, onButtonPress, handleFileUpload }) {
  const [docNames, setDocNames] = useState([])
  const [showUploader, setShowUploader] = useState(false)  // Toggle open source document upload area  


  function handleUpload(text, docName) {
    //setDocTexts(prevDocTexts => [...prevDocTexts, text])
    setDocNames(prevDocNames => [...prevDocNames, docName])
  }

  function handleClickUpload() {
      setShowUploader(!showUploader)
      setShowUploader(!showUploader)
  }

  return (
    <>
      <div class = "document-sidebar-title" >SOURCE DOCUMENTS</div>
      <div className="file_buttons">
        <FileUploader onUpload={(text, name) => handleUpload(text, name)} handleFileUpload={handleFileUpload} />
        <div style={{ marginLeft: '10px', display: 'flex', gap: '10px' }}>
            {docNames.map((name, index) => <span key={index}>{name}</span>)}
        </div>
        {/*<button className="save-button" onClick={() => {}} />*/}
        {/* <button className={toggleState === 1 ? "active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Central Document</button>
        <button className={toggleState === 2 ? "active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Source Document</button> */}
      </div>
      {docs.map(x =>
        <div class="document-display-card"  onClick={() => onButtonPress(x.name)}>
          <label className="document-name">{x.name}</label>
          <br></br> 
          <div >          
          <label style={{display: "inline-block", marginRight:"5px"}}>Include</label>
          <Checkbox id={x.name} handleChange={onCheckboxChange} />
          </div>
        </div>
      )}
    </>
  )
}

export default SourceDocList