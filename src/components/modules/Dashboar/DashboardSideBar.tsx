import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "../../../../public/assets/logo/Logo";
import Link from "next/link";
import DashboardSideBarContent from "./DashboardSideBarContent";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getSidebarItemsByRole } from "@/lib/dashboardSidebarNavItems.config";
import { UserCircle } from "lucide-react";
import LogoutButton from "@/components/LogoutButton";

export async function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const userInfo = await getUserInfo();
  const navItems = getSidebarItemsByRole(userInfo?.role);

  const data = {
    navMain: navItems,
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link href="/" className="">
                <div className="flex items-center gap-2">
                  <Logo />{" "}
                  <h1 className="text-[#DC143C] font-bold text-lg">
                    <span className="text-[#111827]">Event</span> Management
                  </h1>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <DashboardSideBarContent data={data} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex gap-3 font-bold">
          <UserCircle />
          <h1>{userInfo?.name}</h1>
        </div>
        <div>
          <LogoutButton/>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
