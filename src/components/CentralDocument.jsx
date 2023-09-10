import { useState, useEffect, useRef , useCallback} from "react"
import React from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"

const toolbar = [  
    [{ header: [1, 2, 3, 4, 5, 6, false]}],
    [{ font: []}],
    [{ list: "ordered"}, {list: "bullet"}],
    ["bold", "italic", "underline"],
    [{color:[]}, {background: []}],
    [{script:"sub"}, {script: "super"}],
    [{align: []}],
    ["image", "code-block"],
    ["clean"],                               
]

function Document({ state, retrieveFile, centralDoc, saveFile}) {

    const [quill, setQuill] = useState(null)

    const [content, setContent] = useState(null)

    async function handleRetrieve(fileName) {
        try {
            const response = await retrieveFile(fileName)  // API CALL
            setContent(response.content)
        } catch (err) {
            console.error('Error fetching messages:', err)
        }
    }

    const textEditorRef = useCallback(textEditor => {
        if (textEditor == null) return

        try {
            const response = handleRetrieve(centralDoc.filename)
            //console.log("content", content)
            textEditor.innerHTML = ""
            const editor = document.createElement("div")
            textEditor.append(editor)
            const quill = new Quill(editor, {theme: "snow", modules: {toolbar: toolbar}})
            console.log("stuff", centralDoc.fileName, content)
            quill.setText(centralDoc.content)
            setQuill(quill)

        } catch {
            console.log("central doc null")
        }

    }, [centralDoc])

    useEffect(() => {
        if (quill){
            quill.on('text-change', (e) => {
                console.log(centralDoc.filename);
                saveFile(centralDoc.filename, quill.getText())
            })
        }
        // try{
        //     console.log("text", quill.root.innerHTML)
        //     console.log("quill", quill.editor.getText())
        //     saveFile(centralDoc.fileName, quill.getText())
        // } catch {

        // }
    }, [quill])
    // useEffect(() => {
    //     new Quill("#container", {theme: "snow"})
    // })
    return (<div id="container" ref={textEditorRef}></div>)
}

export default Document