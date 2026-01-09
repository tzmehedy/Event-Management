import AllEventCard from "@/components/modules/Dashboard/Admin/AllEventCard";
import { Button } from "@/components/ui/button";
import { getAllEventInfo } from "@/services/event/eventManagement";
import { getAdminStats } from "@/services/stats/stats.services";
import { IAdminEvent } from "@/types/admin.interface";
import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const { data } = await getAdminStats();
  const { data: events } = await getAllEventInfo({});
  const allEventsInfo = events?.events;
  return (
    <div className="container mx-auto mt-5">
      <div className="">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome Back, Here&apos;s what happening today
          </p>
        </div>
        {/* <div>
              <Link href={"/explore-events"}>
                <Button
                  className="border border-[#DC143C] cursor-pointer flex items-center gap-2"
                  variant={"outline"}
                >
                  <Plus />
                  Create Event
                </Button>
              </Link>
            </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  mt-10 ">
        <div className="flex items-center justify-between border-2 p-10 rounded-lg">
          <div className="space-y-3">
            <h1 className=" font-bold text-xl">Total Events</h1>
            <p className="text-5xl font-bold text-muted-foreground">
              {data?.totalEvents}
            </p>
          </div>
          <div className="">
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-pink-200">
              <Calendar className="text-[#DC143C]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 p-10 rounded-lg">
          <div className="space-y-3">
            <h1 className=" font-bold text-xl">Total Users</h1>
            <p className="text-5xl font-bold text-muted-foreground">
              {data?.totalUser}
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-pink-200">
              <Users className="text-[#DC143C]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 p-10 rounded-lg">
          <div className="space-y-3">
            <h1 className=" font-bold text-xl">Total Host</h1>
            <p className="text-5xl font-bold text-muted-foreground">
              {data?.totalHost}
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-pink-200">
              <TrendingUp className="text-[#DC143C]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 p-10 rounded-lg">
          <div className="space-y-3">
            <h1 className=" font-bold text-xl">Revenue</h1>
            <p className="text-5xl font-bold text-muted-foreground">
              ${data?.totalRevenue}
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-pink-200">
              <DollarSign className="text-[#DC143C]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Upcoming Events</h1>
          <Link href={"/admin/dashboard/all-events"}>
            <Button
              className="border border-[#DC143C] cursor-pointer"
              variant={"outline"}
            >
              Show All Events
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {allEventsInfo &&
            allEventsInfo
              ?.slice(0, 3)
              .map((event: IAdminEvent) => (
                <AllEventCard key={event._id} event={event} />
              ))}
        </div>
      </div>
    </div>
  );
}
