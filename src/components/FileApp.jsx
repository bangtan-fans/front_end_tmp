import FileSwitcher from "./FileSwitcher.jsx"
import SourceDocList from "./SourceDocList.jsx"
import CentralDocList from "./CentralDocList.jsx"

import { useState, useEffect, useRef } from "react"



function FileApp({ sourceDocs, handleCheckboxChange }) {

  return (
    <>
      <div className="file-app">
        <div className="doclist-section">
          <CentralDocList docs={sourceDocs.filter(x => x.doc_type === "central_doc")} onCheckboxChange={handleCheckboxChange} className="top-doclist" />
          <SourceDocList docs={sourceDocs.filter(x => x.doc_type === "source_doc")} onCheckboxChange={handleCheckboxChange} className="bottom-doclist" />
        </div>
        <FileSwitcher selectedDocs={sourceDocs.filter(x => x.checked)} className="document-box" />
      </div>
    </>
  )
}

export default FileApp