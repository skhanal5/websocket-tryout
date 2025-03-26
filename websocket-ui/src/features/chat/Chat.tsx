import Column from "@/components/containers/Column";
import Message from "./Message";
import MessageInput from "./MessageInput";
import ChatSection from "./ChatSection";

interface Message {
  id: string;
  message: string;
  sender: string;
  timestamp: string; // should be a date
  self: string;
}

interface Recipient {
  profilePicture: string;
  name: string;
}

interface ChatProps {
  recipient: Recipient;
  messages: Message[];
}

export default function Chat({ recipient, messages }: ChatProps) {
  return (
    <Column className="w-full gap-5">
      <ChatSection
        profilePicture={recipient.profilePicture}
        name={recipient.name}
      />
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.message}
          sender={message.sender}
          timestamp={message.timestamp}
        />
      ))}
      <MessageInput />
    </Column>
  );
}
