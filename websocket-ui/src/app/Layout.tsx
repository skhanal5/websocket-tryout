import { ChatSidebar } from "@/components/sidebar/Sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
