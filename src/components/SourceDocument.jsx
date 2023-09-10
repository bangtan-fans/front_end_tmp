import { useState, useEffect, useRef , useCallback} from "react"
import React from "react"

var hardcoded = "yolo"

function SourceDocument({selectedDoc, retrieveSourceFile, fileNames}) {
    const temp = fileNames.filter((x) => x.checked)
    try {
        console.log("TEMP:", temp[0].name)

        const content = retrieveSourceFile(temp[0].name)

        console.log("SOURCE DOC:", selectedDoc)
        console.log("return: ", content)
    } catch {
        console.log("whoopsies")
    }
    // const content = retrieveSourceFile(fileName[1])
    //document.getElementById("content").innerHTML = content.data;
    //console.log(content)
    return(
        <div>{selectedDoc.content}</div>
    )
}

// const SourceDocument = (props) => {
//     return(
//         <h4>{props.data}</h4>
//     )
// }

export default SourceDocument