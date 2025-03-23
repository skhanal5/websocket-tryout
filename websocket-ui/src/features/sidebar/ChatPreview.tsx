import Column from "@/components/containers/Column";
import Row from "@/components/containers/Row";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PreviewProps {
  contact: string;
  messageBlurb: string;
  timestamp: string;
  isRead: boolean;
}

export default function ChatPreview({
  contact,
  messageBlurb,
  timestamp,
}: PreviewProps) {
  return (
    <Column className="p-2 bg-slate-50 rounded-sm shadow-sm justify-center  hover:bg-slate-100/30 hover:shadow-md">
      <Row className="gap-5 items-center ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Column className="w-full">
          <Row className="justify-between items-center">
            <div className="text-sm">{contact}</div>
            <div className="text-gray-500 text-xs">{timestamp}</div>
          </Row>
          <div className="text-gray-500 text-sm">{messageBlurb}</div>
        </Column>
      </Row>
    </Column>
  );
}
