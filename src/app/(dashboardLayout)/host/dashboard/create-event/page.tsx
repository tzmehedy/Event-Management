import CreateEventForm from "@/components/modules/Dashboard/Host/CreateEventForm";
import React from "react";

export default function CreateEventPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold underline text-[#DC143C]">
          Create Event
        </h1>
        <p className="text-muted-foreground">Fill in the details to publish your event</p>
      </div>

      <div className="mt-10 min-w-full lg:min-w-2/3">
        <CreateEventForm/>
      </div>
    </div>
  );
}
