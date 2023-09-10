import { useState, useEffect, useRef , useCallback} from "react"
import React from "react"

var hardcoded = "yolo"

function SourceDocument({selectedDoc, retrieveSourceFile, fileName}) {
    console.log("FileName:", fileName)
    const temp = fileName.filter((x) => x.checked)
    try {
        console.log("TEMP:", temp)

        const content = retrieveSourceFile(temp)
    } catch {
        console.log("whoopsies")
    }
    // const content = retrieveSourceFile(fileName[1])
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