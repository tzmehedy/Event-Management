import HostRequestTable from "@/components/modules/Dashboard/Admin/HostRequestTable"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { becomeAHostInfo } from "@/services/host/hostManagement"
import { IBecomeHost } from "@/types/admin.interface"

export default async function HostRequestPage() {
  const {data} = await becomeAHostInfo()
  return (
    <div className="container mx-auto my-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Become A Host</h1>
        <p className="text-muted-foreground">Here all request to become a host</p>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="">IsBlocked</TableHead>
              <TableHead className="">Approval Status</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data?.map((user: IBecomeHost) => (
                <HostRequestTable key={user._id} user={user} />
              ))}
            {data?.length === 0 && (
              <TableRow className="text-center">
                <TableCell colSpan={5}>No Users Data Found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>


      
    </div>
  )
}
