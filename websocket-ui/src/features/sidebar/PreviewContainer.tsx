import Column from "@/components/containers/Column";
import Preview from "./Preview";

interface ChatMetadata {
  contact: string;
  messageBlurb: string;
  timestamp: string;
  isRead: boolean;
}

interface ChatHistoryProps {
  chats: ChatMetadata[];
}

export default function PreviewContainer({ chats }: ChatHistoryProps) {
  return (
    <Column className="gap-3">
      {chats.map((chat) => (
        <Preview
          contact={chat.contact}
          messageBlurb={chat.messageBlurb}
          timestamp={chat.timestamp}
          isRead={chat.isRead}
        />
      ))}
    </Column>
  );
}
