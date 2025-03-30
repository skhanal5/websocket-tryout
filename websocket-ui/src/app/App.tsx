import Container from "@/components/containers/Container";
import Chat from "@/features/conversation/Conversation";

export default function App() {
  return (
    <Container className="flex-1 bg-slate-100">
      <Chat contact={{
        profilePicture: "",
        name: "Subodh Khanal"
      }} messages={[
        {
          id: "",
          message: "hello!",
          sender: "me",
          timestamp: "7:27 PM",// should be a date
          profilePicture: ""
        },
        {
          id: "",
          message: "hi back!",
          sender: "other",
          timestamp: "7:27 PM",// should be a date
          profilePicture: ""
        },
      ]}/>
    </Container>
  )
}
