import Message from "./Message";

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
  return messages.map((message) => (
    <Message
      message={message.message}
      sender={message.sender}
      timestamp={message.timestamp}
    />
  ));
}
