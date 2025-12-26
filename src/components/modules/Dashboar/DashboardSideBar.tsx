import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "../../../../public/assets/logo/Logo";
import Link from "next/link";
import DashboardSideBarContent from "./DashboardSideBarContent";

// This is sample data.


export async function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link href="/" className="">
                <div className="flex items-center gap-2">
                  <Logo/> <h1 className="text-[#DC143C] font-bold text-lg"><span className="text-[#111827]">Event</span> Management</h1>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <DashboardSideBarContent/>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
