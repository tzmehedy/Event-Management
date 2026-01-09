import UsersTable from "@/components/modules/Dashboard/Admin/UsersTable";
import Pagination from "@/components/shared/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/services/admin/userManagementServices";
import { IUser } from "@/types/auth.interface";

export default async function AllUsersPage({searchParams}: {searchParams:{page: string}}) {
    const params = await searchParams
  const { data } = await getAllUsers(params);
  const users = data?.user;
  const totalUsers = data?.totalUser;
  const totalPage = Math.ceil(totalUsers/5)
  return (
    <div className="container mx-auto my-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">All users information are here</p>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="">Role</TableHead>
              <TableHead className="">IsBlocked</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users &&
              users?.map((user: IUser) => (
                <UsersTable key={user._id} user={user} />
              ))}
            {users?.length === 0 && (
              <TableRow className="text-center">
                <TableCell colSpan={5}>No Users Data Found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div>
        <Pagination totalPage={totalPage}/>
      </div>
    </div>
  );
}
