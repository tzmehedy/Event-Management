"use client";

import DeleteModal from "@/components/DeleteModal";
import EventDetailsModal from "@/components/EventDetailsModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IEvent } from "@/types/host.interface";
import { Calendar, Clock, MapPin, Pencil, Trash, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AllPublishedEventCard({ event }: { event: IEvent }) {
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const eventDate = new Date(event.date).toDateString()
  return (
    <>
      <Card>
        <CardHeader className="m-3 h-72 overflow-hidden  relative transform hover:scale-100 ">
          <p className="text-[#DC143C] bg-pink-200 px-3 py-1 rounded-xl z-10 opacity-70 right-3 top-2 absolute">
            {event?.event_status}
          </p>
          <Image
            className=" rounded-lg "
            style={{ objectFit: "cover" }}
            src={event.image}
            alt={event.title}
            fill
          />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-xl font-bold flex justify-between">
            <h1>{event?.title}</h1>
            <p className="text-[#DC143C]">${event.joining_fee}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                <Calendar className="text-[#DC143C]" />{" "}
                {eventDate}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="text-[#DC143C]" />
                {event?.time}
              </p>
            </div>
            <p className="flex items-center gap-2">
              <MapPin className="text-[#DC143C]" /> {event?.location}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={() => setOpen(true)}
            className="bg-[#DC143C] text-white cursor-pointer"
            variant={"outline"}
          >
            View Details
          </Button>
          <div className="flex gap-2">
            <Link href={`/host/dashboard/show-participants/${event?._id}`}>
              <Button className="font-bold  cursor-pointer" variant={"outline"}>
                <Users/>
              </Button>
            </Link>
            <Link href={`/host/dashboard/update-event/${event?._id}`}>
              <Button className="font-bold  cursor-pointer" variant={"outline"}>
                <Pencil />
              </Button>
            </Link>
            <Button onClick={()=>setOpenDeleteModal(true)} className="font-bold cursor-pointer" variant={"outline"}>
              <Trash />
            </Button>
          </div>
        </CardFooter>
      </Card>
      <EventDetailsModal open={open} setOpen={setOpen} event={event} />
      <DeleteModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        event={event}
      />
    </>
  );
}
