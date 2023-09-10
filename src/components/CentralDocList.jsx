import Checkbox from "./Checkbox.jsx"

function CentralDocList({ docs, onCheckboxChange, onButtonPress }) {
  return (
    <>
      <div>CENTRAL DOCUMENTS</div>
      {docs.map(x =>
        <div>
          {console.log("eggs", x)}
          <Checkbox id={x.name} handleChange={onCheckboxChange} />
          <button onClick={() => onButtonPress(x.name)}>Set</button>
          <label>{x.name}</label>
          <Checkbox id={x.name} handleChange={onCheckboxChange} />

        </div>
      )}
    </>
  )
}

export default CentralDocList