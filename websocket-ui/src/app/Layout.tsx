import { ChatSidebar } from "@/components/sidebar/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import History from "@/features/sidebar/ChatContainer";
import Chat from "@/types/chats";
import { useEffect, useState } from "react";

export default function Layout() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const dummyData = [
      {
        contact: "Foo Bar",
        messageBlurb: "Hello World!",
        timestamp: "",
        isRead: false,
      },
      {
        contact: "Subodh",
        messageBlurb: "Testing this message",
        timestamp: "string",
        isRead: false,
      },
      {
        contact: "string",
        messageBlurb: "string",
        timestamp: "string",
        isRead: false,
      },
    ];

    setChats(dummyData);
  }, []);

  return (
    <SidebarProvider>
      <ChatSidebar />
      <main>
        <SidebarTrigger />
        <History chats={chats} />
      </main>
    </SidebarProvider>
  );
}
