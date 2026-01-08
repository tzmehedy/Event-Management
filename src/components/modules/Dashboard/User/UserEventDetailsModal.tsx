"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IBookingEvent } from "@/types/user.interface";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IEventDetailsModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  event: IBookingEvent;
}

export default function UserEventDetailsModal({
  open,
  setOpen,
  event,
}: IEventDetailsModalProps) {
  const event_date = new Date(event?.event?.date).toDateString()
  return (
    <Dialog open={open}>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
        <DialogTitle/>
        <div className="overflow-y-auto p-2">
          <DialogHeader className="contents space-y-5 text-left">
            <div className="relative h-72 ">
              <p className="text-[#DC143C] bg-pink-200 px-3 py-1 rounded-xl z-10 opacity-70 right-3 top-2 absolute">
                {event?.event?.event_status}
              </p>
              <Image
                className="rounded-lg"
                src={event?.event?.image}
                alt={event?.event?.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="text-xl font-bold flex justify-between">
              <h1>{event?.event?.title}</h1>
              <p className="text-[#DC143C]">${event.event?.joining_fee}</p>
            </div>

            <div>
              <p className="text-justify">{event?.event?.description}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-5">
                <p className="flex items-center gap-2">
                  <Calendar className="text-[#DC143C]" />{" "}
                  {event_date}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="text-[#DC143C]" />
                  {event?.event?.time}
                </p>
              </div>
              <p className="flex items-center gap-2">
                <MapPin className="text-[#DC143C]" /> {event?.event?.location}
              </p>
            </div>

            <div>
              <p className="text-md font-bold">
                Total Space: {event?.event?.total_participants}
              </p>
              <p className="text-md font-bold">
                Total Bookings: {event?.event?.total_no_of_booking}
              </p>
            </div>

            <hr />
            <div>
                <h1 className="text-lg font-bold">Payment Info</h1>
                <div>
                    <p>Payment-Status: {event?.payment?.payment_status}</p>
                    {
                      event &&  event?.payment?.payment_status === "PAID" && <p>Transaction Id: {event?.payment?.transactionId}</p> 
                    }
                </div>
                
            </div>
            <hr />

            <div>
                <h1 className="text-lg font-bold">Hosted By</h1>
                <div className="flex items-center gap-3">
                    <div className="relative w-20 h-20 rounded-full border flex justify-center items-center">
                        <Image className="p-2 rounded-full" src={event?.event?.host.user.picture} alt="profile" fill style={{objectFit: "contain"}}/>
                    </div>
                    <div>
                        <p>Name: {event?.event?.host.user.name}</p>
                        <p>Email: {event?.event?.host.user.email}</p>
                        <p>Phone: {event?.event?.host.user.phone}</p>
                    </div>
                </div>


            </div>
          </DialogHeader>
          <DialogFooter className=" pb-6 sm:justify-end">
            <DialogClose asChild>
              <Button className="cursor-pointer bg-[#DC143C] text-white" onClick={() => setOpen(false)} type="button" variant={"outline"}>
                Okay
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
