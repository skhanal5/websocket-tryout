import Column from "@/components/containers/Column";
import Message from "./RecipientChat";
import RecipientChat from "./RecipientChat";
import SenderMessage from "./SenderMessage";
import Row from "@/components/containers/Row";

interface Message {
  id: string;
  message: string;
  sender: string;
  timestamp: string; // should be a date
  profilePicture: string;
}

interface MessagesProp {
  messages: Message[];
}

export default function Messages({ messages }: MessagesProp) {
  return (
    <Column className="p-10 w-full gap-5">
      {messages.map((message) =>
        message.sender == "me" ? (
          <Row className="ml-auto">
            <SenderMessage
              key={message.id}
              message={message.message}
              timestamp={message.timestamp}
            />
          </Row>
        ) : (
          <Row>
            <RecipientChat
              key={message.id}
              message={message.message}
              timestamp={message.timestamp}
              profilePicture={message.profilePicture}
            />
          </Row>
        )
      )}
    </Column>
  );
}
