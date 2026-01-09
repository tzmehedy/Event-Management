import ParticipantsTable from "@/components/modules/Dashboard/Host/ParticipantsTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { participantsInfo } from "@/services/host/hostManagement";
import { IParticipants } from "@/types/host.interface";

export default async function ShowParticipantsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const { data } = await participantsInfo(id);

  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Participants</h1>
        <p className="text-muted-foreground">
          You can see all participants information here
        </p>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="">No Of Guest</TableHead>
              <TableHead className="">Payment Status</TableHead>
              <TableHead className="">Amount</TableHead>
              <TableHead className="">Transaction Id</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data?.map((booking: IParticipants) => (
                <ParticipantsTable key={booking._id} booking={booking} />
              ))}
              {data?.length === 0 && (
            <TableRow className="text-center" >
              <TableCell colSpan={5}>No Participants Found</TableCell>
            </TableRow>
          )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
