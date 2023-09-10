import { useEffect } from "react"

import Checkbox from "./Checkbox.jsx"

function SourceDocList({ docs, onCheckboxChange, onButtonPress }) {
  
  return (
    <>
      <div class = "document-sidebar-title" >SOURCE DOCUMENTS</div>
      {docs.map(x =>
        <div class="document-display-card"  onClick={() => onButtonPress(x.name)}>
          <label className="document-name">{x.name}</label>
          <br></br> 
          <div >          
          <label style={{display: "inline-block", marginRight:"5px"}}>Include</label>
          <Checkbox id={x.name} handleChange={onCheckboxChange} />
          </div>

        </div>
      )}
    </>
  )
}

export default SourceDocList