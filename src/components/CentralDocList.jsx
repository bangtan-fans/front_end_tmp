import Checkbox from "./Checkbox.jsx"

function CentralDocList({ docs, onCheckboxChange }) {
  return (
    <>
      <div>CENTRAL DOCUMENTS</div>
      {docs.map(x =>
        <div>
          <label>{x.name}</label>
          <Checkbox id={x.name} handleChange={onCheckboxChange} />

        </div>
      )}
    </>
  )
}

export default CentralDocList