import { useEffect } from "react"

import Checkbox from "./Checkbox.jsx"

function SourceDocList({ docs, onCheckboxChange }) {
  return (
    <>
      <div>SOURCE DOCUMENTS</div>
      {docs.map(x =>
        <div>
          <Checkbox id={x.name} handleChange={onCheckboxChange} />
          <label>{x.name}</label>
        </div>
      )}
    </>
  )
}

export default SourceDocList