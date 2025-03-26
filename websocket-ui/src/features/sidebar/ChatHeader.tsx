import Row from "@/components/containers/Row";
import { SquarePenIcon } from "lucide-react";

export default function ChatHeader() {
  return (
    <Row className="justify-content items-center">
      <div className="flex-1 text-xl font-bold">Chats</div>
      <button className="flex p-2 h-8 w-8 bg-slate-900/5 rounded-full cursor-pointer hover:bg-blue-900/10 items-center justify-center">
        <SquarePenIcon />
      </button>
    </Row>
  );
}
