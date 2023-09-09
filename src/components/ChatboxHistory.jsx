function ChatboxHistory({ chats, onSelectChat, handleNewChat, handleDeleteChat }) {

  return (
    <div className="chatbox-history">
      <button onClick={handleNewChat}>New Chat</button>
      {chats.map(chat => (
        <>
          <div key={chat.id} onClick={() => onSelectChat(chat.id)}>
            {chat.name}
          </div>
          <button onClick={() => handleDeleteChat(chat.id)}>x</button>
        </>
      ))}
    </div>
  )
}

export default ChatboxHistory