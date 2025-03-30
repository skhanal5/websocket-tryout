import Column from "@/components/containers/Column";
import Message from "./RecipientChat";
import ContactHeader from "./Contact";
import MessageForm from "./MessageForm";
import Messages from "./Messages";

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

export default function Conversation({ contact: contact, messages }: ChatProps) {
  return (
    <Column className="w-full gap-5">
      <ContactHeader
        profilePicture={contact.profilePicture}
        name={contact.name}
      />
      <Messages messages={messages}/>
      <MessageForm />
    </Column>
  );
}
