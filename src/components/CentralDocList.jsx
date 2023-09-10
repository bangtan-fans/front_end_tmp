import Checkbox from "./Checkbox.jsx"

function CentralDocList({ docs, onCheckboxChange, onButtonPress }) {
  return (
    <>
      <div  class = "document-sidebar-title">CENTRAL DOCUMENTS</div>
      {docs.map(x =>
        <div class="document-display-card" onClick={() => onButtonPress(x.name)}>
          {console.log("eggs", x)}
          <label>{x.name}</label>
          <Checkbox id={x.name} handleChange={onCheckboxChange} />

        </div>
      )}
    </>
  )
}

export default CentralDocList