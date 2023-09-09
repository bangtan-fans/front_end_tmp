import {useState} from "react"
import "../document.css"
import Document from "./Document.jsx"

function FileSwitcher() {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return(
        <div className="file_switcher">
            <div className="file_buttons">
                <button className={toggleState === 1 ? "active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Central Document</button>
                <button className={toggleState === 2 ? "active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Source Document</button>
            </div>

            <div className="file_content">
                <div className={toggleState === 1 ? "active-content" : "content"}>
                    <Document />
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    <h1> hello world </h1>
                </div>
            </div>
        </div>
    )
}

export default FileSwitcher