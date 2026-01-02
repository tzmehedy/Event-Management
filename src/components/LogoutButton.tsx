"use client";

import { logout } from "@/services/auth/logout";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handelLogout = async () => {
    await logout();
  };
  return (
    <Button
      onClick={handelLogout}
      className="w-full cursor-pointer bg-[#DC143C] text-white"
      
    >
      <LogOut className="text-white"/>Logout
    </Button>
  );
}
