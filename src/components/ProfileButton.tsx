"use client";

import { CircleUser, CircleUserRound, LayoutDashboard } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default  function ProfileButton({name,dashboardHome} : {name: string, dashboardHome:string} ) {
    
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CircleUserRound className="text-3xl text-[#DC143C] cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-lg text-[#DC143C]">Welcome {name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        >
          <Link href="/my-profile" className="flex items-center gap-2"><CircleUser/>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
        >
          <Link href={dashboardHome} className=" flex items-center gap-2"><LayoutDashboard/>Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem 
        >
          <LogoutButton/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
