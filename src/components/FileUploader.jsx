import SourceDocument from "./SourceDocument"
 
// var text;

function FileUploader({ onUpload, handleFileUpload }) {
  function handleFileChange(e) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = (function(event) {
        const text = event.target.result
        onUpload(text, file.name)
        //console.log(text)
        handleFileUpload(file.name.slide(0,-4), text)
      })
      reader.readAsText(file)
      //console.log(file.name.slice(0,-4))
    }]
  }
  //console.log(text, filename)
  return (
    <>
      <input type="file" onChange={handleFileChange} />
      {/* <div>
        <SourceDocument data={text} />
      </div> */}
    </>)
}

export default FileUploader