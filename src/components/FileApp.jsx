import FileSwitcher from "./FileSwitcher.jsx"
import SourceDocList from "./SourceDocList.jsx"
import CentralDocList from "./CentralDocList.jsx"

import { useState, useEffect, useRef } from "react"
import axios from 'axios';


function FileApp({ state }) {
  const [sourceDocs, setSourceDocs] = useState([])

  function handleCheckboxChange(id) {
    setSourceDocs(sourceDocs.map((x) => {
      if (x.name === id) {
        return {name: x.name, id: !x.id}
      }
      return x
    }))
  }

  async function getAllSourceDocs() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/get_all_source_documents`)
        return response.data
    } catch (error) {
        console.error('Error fetching messages:', error)
        throw error
    }
  }

  useEffect(() => {
    async function fetchSourceDocs() {
      try {
        const allDocsList = await getAllSourceDocs()  // API CALL
        setSourceDocs(allDocsList.map((x) => ({name: x, checked: false})));
      } catch (err) {
        console.error('Error fetching chats:', err)
      }
    }
    fetchSourceDocs()
  }, [])

  useEffect(() => {
    console.log(sourceDocs)
  }, [sourceDocs])

  return (
    <>
      <div className="file-app">
        <div className="doclist-section">
          <CentralDocList className="top-doclist" />
          <SourceDocList docs={sourceDocs} onCheckboxChange={handleCheckboxChange} className="bottom-doclist" />
        </div>
        <FileSwitcher fileName={sourceDocs} className="document-box" />
      </div>
  </>)
}

export default FileApp