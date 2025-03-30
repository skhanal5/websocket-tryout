import Container from "@/components/containers/Container";
import Row from "@/components/containers/Row";
import { Send } from "lucide-react";

export default function MessageForm() {
  return (
    <Container className="p-10 h-1/6 bg-white border-t-1 mt-auto">
      <Row className="w-full bg-white gap-5 justify-center items-center">
        <textarea className="flex-1 p-2 border rounded-xl bg-slate-100/20 resize-none focus:outline-none" placeholder="Enter a message..."/>
        <button className="flex p-2 h-8 w-8 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-500 items-center justify-center">
          <Send strokeWidth={0} fill="#fff" />
        </button>
      </Row>
    </Container>
  );
}
