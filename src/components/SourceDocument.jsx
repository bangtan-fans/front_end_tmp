import { useState, useEffect, useRef , useCallback} from "react"
import React from "react"

// function SourceDocument(data) {
//     return(
//         <h3>data.data</h3>
//     )
// }

const SourceDocument = (props) => {
    return(
        <h4>{props.data}</h4>
    )
}

export default SourceDocument