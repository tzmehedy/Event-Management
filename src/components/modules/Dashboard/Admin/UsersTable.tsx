"use client"

import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { blockUnblock } from "@/services/admin/userManagementServices"
import { IUser } from "@/types/auth.interface"
import { toast } from "sonner"

export default function UsersTable({user}: {user: IUser}) {
    const handelBlockUnblock = async(isBlocked: boolean) =>{
        const payload = {
            user: user._id as string,
            isBlocked: isBlocked
        }

        const res = await blockUnblock(payload)

        console.log(res)

        if(res?.success === true){
            toast.success("User is blocked successfully updated")
        }
        if(res?.success===false){
            toast.error(res?.message)
        }

    }
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone? user?.phone : "No phone number"}</TableCell>
      <TableCell className="">{user.role}</TableCell>
      <TableCell className="">{user.isBlocked? "true" : "false"}</TableCell>
      <TableCell className="flex gap-2">
        <Button onClick={()=>handelBlockUnblock(true)} disabled={user.isBlocked} className="cursor-pointer" variant={"outline"}>Block</Button>
        <Button onClick={()=>handelBlockUnblock(false)} disabled={!user.isBlocked} className="cursor-pointer" variant={"outline"}>UnBlock</Button>
      </TableCell>
    </TableRow>
  )
}
