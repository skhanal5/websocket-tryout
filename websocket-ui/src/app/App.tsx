import Container from "@/components/containers/Container";
import Chat from "@/features/conversation/Conversation";
import RegisterPopup from "@/features/register/Register";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState<string>();

  useEffect(() => {
    localStorage.clear()
    const result = localStorage.getItem("user");
    if (result == null) {
      setUser("");
    } else {
      setUser(result);
    }
  }, []);

  return (
    <Container className="flex-1 bg-slate-100">
      {user !== "" ? (
        <Chat
          contact={{
            profilePicture: "",
            name: "Subodh Khanal",
          }}
          messages={[
            {
              id: "",
              message: "hello!",
              sender: "me",
              timestamp: "7:27 PM", // should be a date
              profilePicture: "",
            },
            {
              id: "",
              message: "hi back!",
              sender: "other",
              timestamp: "7:27 PM", // should be a date
              profilePicture: "",
            },
          ]}
        />
      ) : (
        <RegisterPopup />
      )}
    </Container>
  );
}
