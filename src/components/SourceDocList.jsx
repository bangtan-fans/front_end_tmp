import { useEffect } from "react"

import Checkbox from "./Checkbox.jsx"

function SourceDocList({ docs, onCheckboxChange, onButtonPress }) {
  return (
    <>
      <div>SOURCE DOCUMENTS</div>
      {docs.map(x =>
        <div>
          <Checkbox id={x.name} handleChange={onCheckboxChange} />
          <button onClick={() => onButtonPress(x.name)}>Set</button>
          <label>{x.name}</label>
        </div>
      )}
    </>
  )
}

export default SourceDocList