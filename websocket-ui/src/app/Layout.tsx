import { ChatSidebar } from "@/components/sidebar/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}
