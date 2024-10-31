'use client';

import { MessageSquare, Plus, ChevronDown, User2, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar className="fixed inset-y-0 left-0 z-50 flex h-full w-64 flex-col border-r bg-background transition-all duration-300 data-[state=closed]:w-16">
      <SidebarHeader className="border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold data-[state=closed]:hidden">
            AI Chat
          </h1>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={toggleSidebar}
          >
            <PanelLeft className="h-4 w-4" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-1 overflow-auto">
        <div className="px-4 py-2">
          <Button
            className="w-full justify-start"
            variant="outline"
          >
            <Plus className="mr-2 h-4 w-4" />
            <span className="data-[state=closed]:hidden">New Chat</span>
          </Button>
        </div>

        <nav className="px-2">
          <div className="py-2">
            <h2 className="mb-2 px-2 text-sm font-semibold data-[state=closed]:hidden">
              Recent Chats
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                <span className="data-[state=closed]:hidden">General Chat</span>
              </Button>
            </div>
          </div>
        </nav>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <User2 className="mr-2 h-4 w-4" />
              <span className="data-[state=closed]:hidden">Profile</span>
              <ChevronDown className="ml-auto h-4 w-4 data-[state=closed]:hidden" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="top"
            className="w-[--radix-popper-anchor-width]"
          >
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
