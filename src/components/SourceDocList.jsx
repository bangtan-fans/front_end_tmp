import Checkbox from "./Checkbox.jsx"

function SourceDocList({ docs, onCheckboxChange }) {
  console.log("taylor's", docs)
  return (
    <>
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