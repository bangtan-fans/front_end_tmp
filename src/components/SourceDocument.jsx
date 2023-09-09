import { useState, useEffect, useRef , useCallback} from "react"
import React from "react"

var hardcoded = "yolo"

function SourceDocument({selectedDoc, retrieveSourceFile, fileName}) {
    const content = retrieveSourceFile(fileName)
    //document.getElementById("content").innerHTML = content.data;
    //console.log(content)
    return(
        <div>{selectedDoc}</div>
    )
}

// const SourceDocument = (props) => {
//     return(
//         <h4>{props.data}</h4>
//     )
// }

export default SourceDocument