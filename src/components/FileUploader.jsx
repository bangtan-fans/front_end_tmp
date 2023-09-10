import SourceDocument from "./SourceDocument"
import Tesseract from "tesseract.js"
import React, { useEffect, useState } from "react"
 
// var text;

function FileUploader({ onUpload, handleFileUpload }) {
  const [recognizedText, setRecognizedText] = useState("");

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (file) {
      console.log(file.name, file.name.slice(-4))
      if (file.name.slice(-4) === ".txt") {  // Original functionality, only for txt files
        const reader = new FileReader();
        reader.onload = (function(event) {
          const text = event.target.result
          onUpload(text, file.name)
          //console.log(text)
          handleFileUpload(file.name.slice(0, -4), text)
        })  
        reader.readAsText(file)
      }
      else {
        async function recogniseText() {
          if (file) {
            const result = await Tesseract.recognize(URL.createObjectURL(file))
            handleFileUpload(file.name.split('.').slice(0, -1).join('.'), result.data.text)
          }
        }
        recogniseText()
      }
    }
  }
  return (
    <>
      <input type="file" onChange={handleFileChange} />
      {/* <div>
        <SourceDocument data={text} />
      </div> */}
    </>
  )
}

export default FileUploader