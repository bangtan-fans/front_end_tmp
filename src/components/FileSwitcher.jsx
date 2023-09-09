import {useState} from "react"
import "../document.css"
import Document from "./CentralDocument.jsx"
import SourceDocument from "./SourceDocument.jsx"
import FileUploader from "./FileUploader.jsx"

function FileSwitcher() {
    //const [docTexts, setDocTexts] = useState([])  // Saves all of the document text which has been uploaded so far
    const [docNames, setDocNames] = useState([])
    const [showUploader, setShowUploader] = useState(false)  // Toggle open source document upload area  

    function handleUpload(text, docName) {
        //setDocTexts(prevDocTexts => [...prevDocTexts, text])
        setDocNames(prevDocNames => [...prevDocNames, docName])
      }
    
    function handleClickUpload() {
    setShowUploader(!showUploader)
    }

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    // async function handleUploadFile(fileName, fileText) {
    //     // API CALL FUNCTION AXIOS CALL HERE
    // }

    return(
        <div className="file_switcher">
            <div className="file_buttons">
                <FileUploader onUpload={(text, name) => handleUpload(text, name)} />
                <div style={{ marginLeft: '10px', display: 'flex', gap: '10px' }}>
                    {docNames.map((name, index) => <span key={index}>{name}</span>)}
                </div>
                <button className={toggleState === 1 ? "active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Central Document</button>
                <button className={toggleState === 2 ? "active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Source Document</button>
            </div>

            <div className="file_content">
                <div className={toggleState === 1 ? "active-content" : "content"}>
                    <Document />
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    <SourceDocument />
                </div>
            </div>
        </div>
    )
}

export default FileSwitcher