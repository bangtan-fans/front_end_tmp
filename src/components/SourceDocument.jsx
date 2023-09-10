import { useState, useEffect, useRef , useCallback } from "react"
import React from "react"

var hardcoded = "yolo"

function SourceDocument({selectedDoc}) {
    if (selectedDoc === null) return(<></>)
    return (
        <div className="selected-doc">{selectedDoc.content}</div>
    )
}

// const SourceDocument = (props) => {
//     return(
//         <h4>{props.data}</h4>
//     )
// }

export default SourceDocument