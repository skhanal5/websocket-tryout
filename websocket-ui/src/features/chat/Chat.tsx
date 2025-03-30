import Column from "@/components/containers/Column";
import Message from "./RecipientMessage";
import ChatInput from "./ChatInput";
import ContactHeader from "./ContactInfo";
import RecipientChat from "./RecipientMessage";

interface Message {
  id: string;
  message: string;
  sender: string;
  timestamp: string; // should be a date
  profilePicture: string;
}

interface Contact {
  profilePicture: string;
  name: string;
}

interface ChatProps {
  contact: Contact;
  messages: Message[];
}

export default function Chat({ contact: contact, messages }: ChatProps) {
  return (
    <Column className="w-full gap-5">
      <ContactHeader
        profilePicture={contact.profilePicture}
        name={contact.name}
      />
      {messages.map((message) => (
        <RecipientChat
          key={message.id}
          message={message.message}
          timestamp={message.timestamp} 
          profilePicture={message.profilePicture}        />
      ))}
      <ChatInput />
    </Column>
  );
}
