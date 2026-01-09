"use client"

import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { handelHostApprovalStatus } from "@/services/host/hostManagement"
import { IBecomeHost } from "@/types/admin.interface"
import { toast } from "sonner"

export default function HostRequestTable({user}: {user: IBecomeHost}) {
    const handelAcceptAndReject = async(approval_Status: string) =>{
        const payload = {
            hostId: user?._id,
            approval_Status
        }

        const res = await handelHostApprovalStatus(payload)

        if(res?.success === true){
            toast.success("Request Accepted or Rejected")
        }
        if(res?.success === false){
            toast.success(res?.message)
        }


    }
  return (
    <TableRow>
      <TableCell className="font-medium">{user?.user?.name}</TableCell>
      <TableCell>{user?.user?.email}</TableCell>
      <TableCell>{user?.user?.phone? user?.user?.phone : "No phone number"}</TableCell>
     
      <TableCell className="">{user?.user?.isBlocked ? "true" : "false"}</TableCell>
      <TableCell className="">{user?.approval_Status}</TableCell>
      <TableCell className="flex gap-2">
        <Button onClick={()=>handelAcceptAndReject("ACCEPTED")}  className="cursor-pointer bg-green-500" variant={"outline"}>Accept</Button>
        <Button onClick={()=>handelAcceptAndReject("REJECTED")} className="cursor-pointer bg-red-500" variant={"outline"}>Reject</Button>
      </TableCell>
    </TableRow>
  )
}
