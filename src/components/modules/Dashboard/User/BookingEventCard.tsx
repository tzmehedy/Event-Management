"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IBookingEvent } from "@/types/user.interface";
import { Banknote, Calendar, Clock, MapPin} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import UserEventDetailsModal from "./UserEventDetailsModal";
import { initPayment } from "@/services/event/eventManagement";
import { redirect } from "next/navigation";

export default function BookingEventCard({ event }: {event: IBookingEvent}) {
  const [open, setOpen] = useState(false);
  const eventDate = new Date(event.event.date).toDateString()

  const handelInitPayment = async() =>{
    const res = await initPayment(event?._id)
    const data = res?.data

    if(res.success === true){
        redirect(data.paymentURL)
    }

    
  }
  return (
    <>
      <Card>
        <CardHeader className="m-3 h-72 overflow-hidden  relative transform hover:scale-100 ">
          <p className="text-[#DC143C] bg-pink-200 px-3 py-1 rounded-xl z-10 opacity-70 right-3 top-2 absolute">
            {event?.event?.event_status}
          </p>
          <Image
            className=" rounded-lg "
            style={{ objectFit: "cover" }}
            src={event?.event?.image}
            alt={event?.event?.title}
            fill
          />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-xl font-bold flex justify-between">
            <h1>{event?.event?.title}</h1>
            <p className="text-[#DC143C]">${event?.event?.joining_fee}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                <Calendar className="text-[#DC143C]" />{" "}
                {eventDate}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="text-[#DC143C]" />
                {event?.event?.time}
              </p>
            </div>
            <p className="flex items-center gap-2">
              <MapPin className="text-[#DC143C]" /> {event?.event?.location}
            </p>

            <div>
                <p className="flex items-center gap-2"><Banknote className="text-green-500 font-bold"/> Payment status: {event?.payment?.payment_status}</p>
            </div>

          </div>
        </CardContent>
        <CardFooter className="flex gap-5">
          <Button
            onClick={() => setOpen(true)}
            className="bg-[#DC143C] text-white cursor-pointer w-2/3"
            variant={"outline"}
          >
            View Details
          </Button>
          <Button
            onClick={handelInitPayment}
            className="bg-green-600 text-white cursor-pointer flex-1"
            variant={"outline"}
            disabled={event?.payment?.payment_status === "PAID"}
          >
            <Banknote/>Pay
          </Button>
        </CardFooter>
      </Card>
      <UserEventDetailsModal open={open} setOpen={setOpen} event={event}/>
    </>
  );
}
