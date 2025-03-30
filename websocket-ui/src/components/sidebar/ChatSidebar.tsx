import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import History from "@/features/sidebar/PreviewContainer";
import Header from "@/features/sidebar/Header";
import Chat from "@/types/chats";

interface ChatSidebarProps {
  chats: Chat[];
}

export function ChatSidebar({ chats }: ChatSidebarProps) {
  return (
    <Sidebar className="p-5 w-1/4">
      <SidebarHeader className="bg-white">
        <Header></Header>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <History chats={chats} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
