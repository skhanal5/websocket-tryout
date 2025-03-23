import ChatPreview from "./ChatPreview";

interface ChatMetadata {
  contact: string;
  messageBlurb: string;
  timestamp: string;
  isRead: boolean;
}

interface ChatHistoryProps {
  chats: ChatMetadata[];
}

export default function ChatContainer({ chats }: ChatHistoryProps) {
  return (
    <div>
      {chats.map((chat) => (
        <ChatPreview
          contact={chat.contact}
          messageBlurb={chat.messageBlurb}
          timestamp={chat.timestamp}
          isRead={chat.isRead}
        />
      ))}
    </div>
  );
}
