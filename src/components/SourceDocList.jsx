import { useEffect } from "react"

import Checkbox from "./Checkbox.jsx"

function SourceDocList({ docs, onCheckboxChange, onButtonPress }) {
  return (
    <>
      <div class = "document-sidebar-title" >SOURCE DOCUMENTS</div>
      {docs.map(x =>
        <div class="document-display-card">
          <label>{x.name}</label> 
          
          <Checkbox id={x.name} handleChange={onCheckboxChange} />
          <button onClick={() => onButtonPress(x.name)}>Set</button>
          <label>{x.name}</label>
        </div>
      )}
    </>
  )
}

export default SourceDocList