import Column from "@/components/containers/Column";
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
    <Column className="m-3 gap-5">
      {chats.map((chat) => (
        <ChatPreview
          contact={chat.contact}
          messageBlurb={chat.messageBlurb}
          timestamp={chat.timestamp}
          isRead={chat.isRead}
        />
      ))}
    </Column>
  );
}
