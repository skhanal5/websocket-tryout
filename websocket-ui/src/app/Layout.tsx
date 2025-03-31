import Container from "@/components/containers/Container";
import Row from "@/components/containers/Row";
import { ChatSidebar } from "@/components/sidebar/ChatSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Chat from "@/types/chats";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

export default function Layout() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const dummyData = [
      {
        contact: "Foo Bar",
        messageBlurb: "Hello World!",
        timestamp: "3/23/2025",
        isRead: false,
      },
      {
        contact: "Subodh",
        messageBlurb: "Testing this message",
        timestamp: "3/23/2025",
        isRead: false,
      },
      {
        contact: "Khanal",
        messageBlurb: "Another test!",
        timestamp: "3/23/2025",
        isRead: false,
      },
    ];

    setChats(dummyData);
  }, []);

  return (
    <Row className="w-screen h-screen">
      <SidebarProvider className="w-1/4">
        <ChatSidebar chats={chats} />
      </SidebarProvider>
      <Container className="flex-1">
        <Outlet />
      </Container>
    </Row>
  );
}
