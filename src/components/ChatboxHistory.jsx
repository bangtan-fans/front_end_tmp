function ChatboxHistory({ chats, onSelectChat }) {
  console.log("CHATS", chats)
  return (
    <div className="chatbox-history">
      {chats.map(chat => (
        <div key={chat.id} onClick={() => onSelectChat(chat.id)}>
          {chat.name}
        </div>
      ))}
    </div>
  )
}

export default ChatboxHistory