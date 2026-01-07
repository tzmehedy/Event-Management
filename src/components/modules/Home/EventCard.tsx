"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IAllEvent } from "@/types/event.interface";

export function EventCard({ event }: { event: IAllEvent }) {
  const eventDate = new Date(event?.date).toDateString();
  return (
    <Card className="max-w-dvw">
      <CardContent className="space-y-3">
        <div className="relative h-64">
          <Image
            className="rounded-lg"
            src={event?.image}
            alt={event?.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-xl font-bold">{event?.title}</h1>
          <p className="text-muted-foreground text-lg">Category: <span className="font-bold text-sm">{(event?.category).toUpperCase()}</span></p>
          <div className="space-y-2 flex justify-between items-center">
            <p className="flex justify-center items-center gap-2">
              <Calendar className="text-[#DC143C]" /> {eventDate}
            </p>
            <p className="flex justify-center items-center gap-2">
              <Clock className="text-[#DC143C]" /> {event?.time}
            </p>
          </div>
          <p className="flex  items-center gap-2">
            <MapPin className="text-[#DC143C]" /> {event?.location}
          </p>
        </div>

        <Button
          className="w-full border border-[#DC143C] text-[#DC143C]"
          variant="outline"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}
