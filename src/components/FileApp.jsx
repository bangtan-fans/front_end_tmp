import FileSwitcher from "./FileSwitcher.jsx"
import SourceDocList from "./SourceDocList.jsx"
import CentralDocList from "./CentralDocList.jsx"

function FileApp({ state }) {
  return (
    <>
      <div className="file-app">
        <div className="doclist-section">
          <CentralDocList className="top-doclist" />
          <SourceDocList className="bottom-doclist" />
        </div>
        <FileSwitcher className="document-box" />
      </div>
  </>)
}

export default FileApp