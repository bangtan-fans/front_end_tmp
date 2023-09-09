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

function Document({ state }) {
    const textEditorRef = useCallback(textEditor => {
        if (textEditor == null) return

        textEditor.innerHTML = ""
        const editor = document.createElement("div")
        textEditor.append(editor)
        new Quill(editor, {theme: "snow", modules: {toolbar: toolbar}})

    }, [])
    // useEffect(() => {
    //     new Quill("#container", {theme: "snow"})
    // })
    return (<div id="container" ref={textEditorRef}></div>)
}

export default Document