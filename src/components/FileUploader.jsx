import SourceDocument from "./SourceDocument"
import Tesseract from "tesseract.js"
import React, { useEffect, useState } from "react"
import * as pdfjs from "pdfjs-dist";
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;


 
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
      else if (file.name.slice(-4) === ".png" || file.name.slice(-5) === ".jpeg") {
        async function recogniseText() {
          if (file) {
            const result = await Tesseract.recognize(URL.createObjectURL(file))
            handleFileUpload(file.name.split('.').slice(0, -1).join('.'), result.data.text)
          }
        }
        recogniseText()
      }
      else if (file.name.slice(-4) === ".pdf") {
        const loadingTask = pdfjs.getDocument(URL.createObjectURL(file))
        loadingTask.promise.then(async pdf => {
          let fullText = ""
          const canvas = document.createElement("canvas")
          const context = canvas.getContext("2d")

          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum)

            const scale = 1.5
            const viewport = page.getViewport({ scale })
            canvas.height = viewport.height
            canvas.width = viewport.width

            await page.render({ canvasContext: context, viewport: viewport }).promise

            const result = await Tesseract.recognize(canvas)
            fullText += result.data.text + "\n"; // Concatenate the text of each page
          }

          handleFileUpload(file.name.split('.').slice(0, -1).join('.'), fullText)
        })
      }
      else {
        console.log("File type not supported :(")
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