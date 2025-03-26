import Container from "@/components/containers/Container";
import Chat from "@/features/chat/Chat";

export default function App() {
  return (
    <Container className="flex-1 bg-slate-100">
      <Chat recipient={{
        profilePicture: "",
        name: "Subodh Khanal"
      }} messages={[]}/>
    </Container>
  )
}
