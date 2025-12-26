"use client";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { GetIconComponents } from "@/lib/icon-mapper";
import { NavSection } from "@/types/dashboard.interface";
import Link from "next/link";

interface NavItemsProps {
  data: {
    navMain: NavSection[];
  };
}

export default function DashboardSideBarContent({ data }: NavItemsProps) {
  return (
    <SidebarMenu>
      {data.navMain.map((item) => (
        <SidebarMenuItem key={item.title}>
          <h1 className="text-[#DC143C] font-bold">{item.title}</h1>

          {item.items?.length ? (
            <SidebarMenuSub>
              {item.items.map((item) => {
                const Icon = GetIconComponents(item.icon);
                return (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton asChild>
                      <div>
                        <Icon />
                        <Link  href={item.url}>{item.title}</Link>
                      </div>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                );
              })}
            </SidebarMenuSub>
          ) : null}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
