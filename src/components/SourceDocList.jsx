import { useEffect } from "react"

import Checkbox from "./Checkbox.jsx"


function SourceDocList({ docs, onCheckboxChange }) {
  return (
    <>
      <div class = "document-sidebar-title" >SOURCE DOCUMENTS</div>
      {docs.map(x =>
        <div class="document-display-card">
          <label>{x.name}</label> 
          
          <Checkbox id={x.name} handleChange={onCheckboxChange} />
          <span>Connect</span>
        </div>
      )}
    </>
  )
}

export default SourceDocList