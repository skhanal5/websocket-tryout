import Container from "@/components/containers/Container";
import Chat from "@/features/chat/Chat";

export default function App() {
  return (
    <Container className="w-screen h-screen bg-slate-100">
      <Chat messages={[]}/>
    </Container>
  )
}
