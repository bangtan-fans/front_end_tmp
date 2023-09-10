import Checkbox from "./Checkbox.jsx"
import axios from 'axios'

function CentralDocList({ docs, appendDocs, onCheckboxChange, onButtonPress, handleFileUpload}) {
  const appendToDocs = (data) => {
    appendDocs([...docs, data]);
  };

  function promptUser() {
    const filename = prompt("Please enter a filename")
    handleFileUpload(filename)
  }
  
  async function handleFileUpload(fileName) {
    console.log("trying to send", fileName)
    try {
        const postData = {
          "filename": fileName,
          "content": "",
          "doc_type": "central_doc"
        }
        console.log("trying to make request now")
        const response = await axios.post(`${process.env.REACT_APP_URL}/add_document`, postData)
        appendToDocs(postData)
        console.log(response.data)
      } catch (error) {
        console.error('There was an error!', error)
      }
  }

  return (
    <>
      <div>CENTRAL DOCUMENTS</div>
        <div className="file_buttons">
          <button onClick={promptUser}>Add Central Document</button>
      <div  class = "document-sidebar-title">CENTRAL DOCUMENTS</div>
        </div>
        {docs.map(x =>
          <div>
            <Checkbox id={x.name} handleChange={onCheckboxChange} />
            <button onClick={() => onButtonPress(x.name)}>Set</button>
            <label>{x.name}</label>
            {/* <Checkbox id={x.name} handleChange={onCheckboxChange} /> */}

          </div>
        )}
    </>
  )
}

export default CentralDocList