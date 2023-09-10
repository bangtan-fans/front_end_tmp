import Checkbox from "./Checkbox.jsx"

function CentralDocList({ docs, onCheckboxChange }) {
  return (
    <>
      <div>CENTRAL DOCUMENTS</div>
      {docs.map(x =>
        <div>
          <Checkbox id={x.name} handleChange={onCheckboxChange} />
          <label>{x.name}</label>
        </div>
      )}
    </>
  )
}

export default CentralDocList