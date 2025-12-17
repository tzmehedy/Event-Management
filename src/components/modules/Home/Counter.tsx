"use client"

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Counter() {
    const [createdEvent, setCreatedEvent] = useState(0)
    const [happyAttendees, setHappyAttendees] = useState(0)
    const [cities, setCities] = useState(0)
    const [rating, setRating] = useState(1.0)

    useEffect(()=>{
        const numberOfCreatedEvent = setInterval(()=>{
            setCreatedEvent((prev)=> (prev<150? prev+1 : 150))
        }, 20)

        const numberOfHappyAttendees = setInterval(()=>{
            setHappyAttendees((prev)=> (prev<140? prev+1 : 140))
        }, 20)

        const numberOfCities = setInterval(()=>{
            setCities((prev)=> (prev<80? prev+1 : 80))
        }, 20)
        const numberOfRating = setInterval(()=>{
            setRating((prev)=> (prev < 4.9 ? parseFloat((prev+ 0.1).toFixed(2)) : 4.9))
        }, 30)

        



        return ()=>{
            clearInterval(numberOfCreatedEvent)
            clearInterval(numberOfHappyAttendees)
            clearInterval(numberOfCities)
            clearInterval(numberOfRating)
        }
    },[])
  return (
    <div className="bg-[#DC143C]">
      <div className="container mx-auto py-20 flex flex-col md:flex-row justify-between items-center gap-10 text-white">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="text-6xl font-bold ">
            <span>+</span>{createdEvent}
          </h1>
          <p>Event Created</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5 ">
          <h1 className="text-6xl font-bold ">
            <span>+</span>{happyAttendees}
          </h1>
          <p>Happy Attendees</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="text-6xl font-bold ">
            <span>+</span>{cities}
          </h1>
          <p>Cities Worldwide</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="flex items-center gap-2 text-6xl font-bold">
            <span>
              <Star />
            </span>
            {rating}
          </h1>
          <p>Average Rating</p>
        </div>
      </div>
    </div>
  );
}
