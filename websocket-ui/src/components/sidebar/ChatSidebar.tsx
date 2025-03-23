import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import History from "@/features/sidebar/ChatContainer";
import Chat from "@/types/chats";

interface ChatSidebarProps {
  chats: Chat[]
}

export function ChatSidebar({chats}: ChatSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <History chats={chats} />
        </SidebarGroup>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
