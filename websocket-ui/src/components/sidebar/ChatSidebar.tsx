import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import History from "@/features/sidebar/PreviewContainer";
import Header from "@/features/sidebar/Header";
import Chat from "@/types/chats";
import { SearchChat } from "@/features/sidebar/Search";

interface ChatSidebarProps {
  chats: Chat[];
}

export function ChatSidebar({ chats }: ChatSidebarProps) {
  return (
    <Sidebar className="p-5 w-1/4">
      <SidebarHeader className="bg-white">
        <Header />
        <SearchChat />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <History chats={chats} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
