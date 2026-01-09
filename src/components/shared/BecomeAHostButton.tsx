"use client";

import { toast } from "sonner";
import { Button } from "../ui/button";
import { becomeAHost } from "@/services/host/hostManagement";

export default function BecomeAHostButton({role}: {role:string}) {
    const handelBecomeAHost = async() =>{
    const res = await becomeAHost()

    if(res?.success === true){
      toast.success(res?.message)
    }
    if(res?.success === false){
      toast.error(res?.message)
    }

  } 
  return (
    <Button
      onClick={handelBecomeAHost}
      hidden={role !== "USER"}
      className="text-sm cursor-pointer"
      
    >
      Become a host
    </Button>
  );
}
