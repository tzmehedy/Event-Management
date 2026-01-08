import EventBooking from "@/components/modules/Event/EventBooking";
import { getEventInfo } from "@/services/event/eventManagement";
import { IAllEvent } from "@/types/event.interface";
import {
  Calendar,
  Clock1,
  MapPin,
  Ticket,
  UserCircle,
  Users,
} from "lucide-react";
import Image from "next/image";

export default async function EventDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const { data } = await getEventInfo(id);
  const eventInfo = data as IAllEvent;
  const date = new Date(eventInfo?.date).toDateString();
  
  const category = eventInfo?.category?.toUpperCase()
  const hostName = eventInfo?.host?.user?.name?.toUpperCase()

  return (
    <div className="container mx-auto my-10">
      <div className="relative">
        <div className="relative h-80 border-2 border-[#DC143C] rounded-lg ">
          <Image
            className="p-5"
            src={eventInfo?.image}
            alt={eventInfo.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center   gap-5 ">
          <div className="space-y-5 z-20 md:w-2/3">
            <div className="px-10 py-8 flex flex-col justify-center border-2 rounded-lg shadow-2xl mx-10  bg-white -mt-20  space-y-5">
              <p className="text-sm text-muted-foreground bg-pink-200 w-28 text-center rounded-lg py-1 px-2">
                {category}
              </p>
              <h1 className="text-3xl font-bold">{eventInfo.title}</h1>
              <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-pink-200 flex justify-center items-center">
                    <Calendar className="text-[#DC143C]" />
                  </div>
                  <div>
                    <p>Date</p>
                    <p>{date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-pink-200 flex justify-center items-center">
                    <Clock1 className="text-[#DC143C]" />
                  </div>
                  <div>
                    <p>Time</p>
                    <p>{eventInfo?.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-pink-200 flex justify-center items-center">
                    <MapPin className="text-[#DC143C]" />
                  </div>
                  <div>
                    <p>Location</p>
                    <p>{eventInfo?.location}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="text-[#DC143C]"/>
                  <p className="text-lg">Capacity: <span className="font-bold text-xl">{eventInfo?.total_participants}</span> person</p>
                </div>
                <div className="flex items-center gap-2">
                  <Ticket className="text-[#DC143C]" />
                  <p className="text-lg">
                    Total Participants Till Now: <span className="font-bold text-xl">{eventInfo?.total_no_of_booking}</span>{" "}
                    person
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold">About This Event</h1>
                <p className="text-justify">{eventInfo?.description}</p>
              </div>
            </div>

            <div className="px-10 py-5 flex flex-col justify-center border-2 rounded-lg shadow-xl mx-10  bg-white  space-y-5 ">
              <div>
                <h1 className="text-xl font-bold">Hosted By</h1>
              </div>
              <hr />
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 rounded-full flex justify-center items-center border border-[#DC143C]">
                  {eventInfo?.host?.user?.picture ? (
                    <Image
                      className="rounded-full p-2"
                      src={eventInfo?.host?.user?.picture}
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <UserCircle className="text-[#DC143C]" size={40} />
                  )}
                </div>

                <div>
                  <h1 className="font-bold">
                    {hostName}
                  </h1>
                  <p className="text-muted-foreground text-sm">Organizer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 mt-5 p-2 md:p-0">
            <EventBooking eventInfo={eventInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
