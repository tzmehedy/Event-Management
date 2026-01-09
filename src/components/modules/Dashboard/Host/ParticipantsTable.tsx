"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { IParticipants } from "@/types/host.interface";

export default function ParticipantsTable({booking}: {booking: IParticipants}) {
  return (
    <TableRow>
      <TableCell className="font-medium">{booking?.user.name}</TableCell>
      <TableCell>{booking?.user.email}</TableCell>
      <TableCell>{booking?.user.phone}</TableCell>
      <TableCell className="">{booking?.guestCount}</TableCell>
      <TableCell className="">{booking?.payment.payment_status}</TableCell>
      <TableCell className="">{booking?.payment.amount}</TableCell>
      <TableCell className="">{booking?.payment.transactionId && booking?.payment.payment_status === "PAID" ? booking?.payment.transactionId : "Payment Not Complete"}</TableCell>
    </TableRow>

  );
}
