import Column from "@/components/containers/Column";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Container from "@/components/containers/Container";

interface Message {
  message: string;
  sender: string;
  timestamp: string; // should be a date
  self: string;
}

interface ChatProps {
  messages: Message[];
}

export default function Chat({ messages }: ChatProps) {
  return (
    <Container className="p-5">
      <Column>
        {messages.map((message) => (
          <Message
            message={message.message}
            sender={message.sender}
            timestamp={message.timestamp}
          />
        ))}
        <MessageInput/>
      </Column>
    </Container>
  );
}
