import Column from "@/components/containers/Column";
import Container from "@/components/containers/Container";
import Row from "@/components/containers/Row";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface RecipientChatProps {
  message: string;
  timestamp: string; // should be a date
  profilePicture: string;
}

export default function RecipientChat({
  message,
  timestamp,
  profilePicture,
}: RecipientChatProps) {
  return (
    <Row className="gap-2 justify-center items-start">
      <Avatar className="">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{profilePicture}</AvatarFallback>
      </Avatar>
      <Column className="gap-2">
        <Container className="p-2 bg-white shadow-lg rounded-lg text-sm">
          {message}
        </Container>
        <div className="text-xs text-slate-900/50">{timestamp}</div>
      </Column>
    </Row>
  );
}
