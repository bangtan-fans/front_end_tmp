function ChatboxHistory({ chats, onSelectChat }) {
  console.log("CHATS", chats)
  return (
    <div className="chatbox-history">
      {chats.map(chat => (
        <div key={chat.chatID} onClick={() => onSelectChat(chat.chatID)}>
          {chat.chatName}
        </div>
      ))}
    </div>
  )
}

export default ChatboxHistory