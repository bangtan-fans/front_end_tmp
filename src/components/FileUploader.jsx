function FileUploader({ onUpload }) {

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = (function(event) {
        const text = event.target.result
        onUpload(text, file.name)
      })
      reader.readAsText(file)
      console.log(reader)
    }
  }

  return (
    <>
      <input type="file" onChange={handleFileChange} />
    </>)
}

export default FileUploader