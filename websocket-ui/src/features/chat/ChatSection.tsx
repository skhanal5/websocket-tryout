import Row from "@/components/containers/Row";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatSectionProps {
  profilePicture: string; // should be a path or sum
  name: string;
}

export default function ChatSection({
  profilePicture,
  name,
}: ChatSectionProps) {
  return (
    <Row className="p-3 bg-white gap-5 justify-center items-center border-b-1">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{profilePicture}</AvatarFallback>
      </Avatar>
      <p>{name}</p>
    </Row>
  );
}
