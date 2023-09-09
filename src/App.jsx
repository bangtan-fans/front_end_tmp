import './App.css'
import Chatbox from "./components/Chatbox.jsx"
import Document from "./components/Document.jsx"


function App() {
  return (
    <>
      <div className="container">
        <div className="side-div">
          <Document />
        </div>
        <div className="side-div">
          <Chatbox />
        </div>
      </div>
    </>
  )
}

export default App