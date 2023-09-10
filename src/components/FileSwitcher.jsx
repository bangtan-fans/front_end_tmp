import { useState, useEffect } from "react"
import "../document.css"
import Document from "./CentralDocument.jsx"
import SourceDocument from "./SourceDocument.jsx"
import FileUploader from "./FileUploader.jsx"
import axios from 'axios';


function FileSwitcher({ selectedDocs, dispDoc, retrieveFile, saveFile}) {
    useEffect(() => {
    }, [])
    //const [docTexts, setDocTexts] = useState([])  // Saves all of the document text which has been uploaded so far

    // const [centralDoc, setCentralDoc] = useState([])

    // function changeCentralDoc

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    // async function saveCentralDoc() {
    //     try {
    //         const response = await axios.get(``)
    //     } catch (error) {
    //         console.error('Error saving file', error)
    //     }
    // }

    return(
        <div className="file_switcher">
            <div className="file_content">
                <div className={dispDoc && dispDoc.doc_type === "central_doc" ? "active-content" : "content"}>
                    <Document retrieveFile={retrieveFile} centralDoc={dispDoc} saveFile ={saveFile}/>
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