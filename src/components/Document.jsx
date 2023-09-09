import { useState, useEffect, useRef , useCallback} from "react"
import React from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"

function Document({ state }) {
    const textEditorRef = useCallback(textEditor => {
        if (textEditor == null) return

        textEditor.innerHTML = ""
        const editor = document.createElement("div")
        textEditor.append(editor)
        new Quill(editor, {theme: "snow"})

    }, [])
    // useEffect(() => {
    //     new Quill("#container", {theme: "snow"})
    // })
    return (<div id="container" ref={textEditorRef}></div>)
}

export default Document