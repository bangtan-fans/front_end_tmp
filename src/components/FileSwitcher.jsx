import { useState, useEffect } from "react"
import "../document.css"
import Document from "./CentralDocument.jsx"
import SourceDocument from "./SourceDocument.jsx"
import FileUploader from "./FileUploader.jsx"
import axios from 'axios';


function FileSwitcher({ selectedDocs, dispDoc, handleFileUpload }) {
    useEffect(() => {
    }, [])
    //const [docTexts, setDocTexts] = useState([])  // Saves all of the document text which has been uploaded so far
    const [docNames, setDocNames] = useState([])
    const [showUploader, setShowUploader] = useState(false)  // Toggle open source document upload area  

    // const [centralDoc, setCentralDoc] = useState([])

    // function changeCentralDoc

    function handleUpload(text, docName) {
        //setDocTexts(prevDocTexts => [...prevDocTexts, text])
        setDocNames(prevDocNames => [...prevDocNames, docName])
      }
    
    function handleClickUpload() {
        setShowUploader(!showUploader)
        setShowUploader(!showUploader)
    }

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    // async function handleUploadFile(fileName, fileText) {
    //     console.log("trying to send", fileName, fileText)
    //     try {
    //         const postData = {
    //           "filename": fileName,
    //           "content": fileText,
    //           "doc_type": "source_doc"
    //         }
    //         console.log("trying to make request now")
    //         const response = await axios.post(`${process.env.REACT_APP_URL}/add_document`, postData)
    //         console.log(response.data)
    //     } catch (error) {
    //         console.error('There was an error!', error)
    //     }
    // }

    // async function saveCentralDoc() {
    //     try {
    //         const response = await axios.get(``)
    //     } catch (error) {
    //         console.error('Error saving file', error)
    //     }
    // }

    return(
        <div className="file_switcher">
            <div className="file_buttons">
                <FileUploader onUpload={(text, name) => handleUpload(text, name)} handleFileUpload={handleFileUpload} />
                <div style={{ marginLeft: '10px', display: 'flex', gap: '10px' }}>
                    {docNames.map((name, index) => <span key={index}>{name}</span>)}
                </div>
                {/*<button className="save-button" onClick={() => {}} />*/}
                {/* <button className={toggleState === 1 ? "active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Central Document</button>
                <button className={toggleState === 2 ? "active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Source Document</button> */}
            </div>

            <div className="file_content">
                <div className={dispDoc && dispDoc.doc_type === "central_doc" ? "active-content" : "content"}>
                    {dispDoc && <div>Currently editing: {dispDoc.filename}</div>}
                    <Document />
                </div> 
                <div className={dispDoc && dispDoc.doc_type === "source_doc" ? "active-content" : "content"}>
                    <SourceDocument selectedDoc={dispDoc}/>
                </div>
                {/* <div className={toggleState === 3 ? "active-content" : "content"}>
                    <p></p>
                </div> */}
            </div>
        </div>
    )
}

export default FileSwitcher