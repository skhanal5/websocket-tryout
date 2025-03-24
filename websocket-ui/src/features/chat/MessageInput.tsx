import Container from "@/components/containers/Container";
import Row from "@/components/containers/Row";
import { Send } from "lucide-react";

export default function MessageInput() {
  return (
    <Container className="p-2 rounded-md bg-white">
      <Row className="rounded-md bg-white gap-5 flex-1 justify-center items-center">
        <textarea className="p-5 rounded-lg" placeholder="Enter a message..."/>
        <button className="flex p-2 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-500 items-center justify-center">
          <Send strokeWidth={0} fill="#fff" />
        </button>
      </Row>
    </Container>
  );
}
