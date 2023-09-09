import { useState, useEffect, useRef } from "react"

import { MessageList, Input, Button } from 'react-chat-elements'
import "react-chat-elements/dist/main.css"

function Chatbox({ state }) {

  const [messages, setMessages] = useState([])

  useEffect(() => {
      const newMessages = state.map(item => ({
          position: "left",
          type: "text",
          title: item.name,
          text: item.message
      }));
      setMessages(newMessages);
  }, [state]);

  const [currMessage, setCurrMessage] = useState("")

  const inputRef = useRef(null)

  async function handleClick(message) {
    try {
        await navigator.clipboard.writeText(message.text)
        console.log('Text copied to clipboard')
    } catch (err) {
        console.error('Failed to copy text: ', err)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (currMessage === "") {
      return;
    }

    // NEED SOME VARIABLE HERE TO BLOCK FURTHER REQUESTS UNTIL READY

    // API CALL TO BACKEND HERE
    // USE THE RESPONSE FROM API CALL TO WRITE THE NEW MESSAGE

    const newMessage = {
      position: "right", // assuming new messages are always on the right
      type: "text",
      title: "Your Name", // Replace with the actual name if needed
      text: currMessage
    };

    console.log(currMessage)

    setMessages(prevMessages => [...prevMessages, newMessage])
    setCurrMessage("")  // Clear the input field

    if (inputRef.current && inputRef.current.value) {  // Hardcode, component is weird
      inputRef.current.value = ""
    }
  }

  return (<>
    <MessageList
      className='message-list'
      lockable={true}
      toBottomHeight={'100%'}
      onClick={(message) => {handleClick(message)}}
      dataSource={messages}
    />
    <form onSubmit={handleSubmit}>
      <Input
        referance={inputRef}
        placeholder="Query"
        multiline={true}
        value={currMessage}
        onChange={(e) => setCurrMessage(e.target.value)}
        rightButtons={<Button type="submit" text="Send" />}
      />
    </form>
  </>)
}

export default Chatbox