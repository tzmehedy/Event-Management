"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

export function Testimonial() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-center">Testimonial</h1>
      </div>
      <div className="flex justify-center items-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-80 md:w-200 md:h-80 relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <div className="absolute left-40 top-45 z-10 hidden md:inline-block">
            <CarouselPrevious className="text-[#DC143C]" />
          </div>

          <CarouselContent className="">
            <CarouselItem className="flex justify-center items-center">
              <Card className="h-80 border-2 border-[#DC143C] flex justify-center items-center">
                <CardContent className="flex flex-col items-center p-6 space-y-5">
                  <Quote className="text-[#DC143C]" />
                  <h1 className="text-center text-xl font-bold">
                    The variety of events is unmatched. From cooking classes to{" "}
                    <br />
                    tech meetups, I always find something interesting to do.
                  </h1>
                  <p className="font-bold">Elena R</p>
                  <p className="text-[#DC143C]">Foodie & Techie</p>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="flex justify-center items-center">
              <Card className="h-80 border-2 border-[#DC143C] flex justify-center items-center">
                <CardContent className="flex flex-col items-center p-6 space-y-5">
                  <Quote className="text-[#DC143C]" />
                  <h1 className="text-center text-xl font-bold">
                    The variety of events is unmatched. From cooking classes to{" "}
                    <br />
                    tech meetups, I always find something interesting to do.
                  </h1>
                  <p className="font-bold">Elena R</p>
                  <p className="text-[#DC143C]">Foodie & Techie</p>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="flex justify-center items-center">
              <Card className="h-80 border-2 border-[#DC143C] flex justify-center items-center">
                <CardContent className="flex flex-col items-center p-6 space-y-5">
                  <Quote className="text-[#DC143C]" />
                  <h1 className="text-center text-xl font-bold">
                    The variety of events is unmatched. From cooking classes to{" "}
                    <br />
                    tech meetups, I always find something interesting to do.
                  </h1>
                  <p className="font-bold">Elena R</p>
                  <p className="text-[#DC143C]">Foodie & Techie</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>

          <div className="absolute right-40 top-45 z-10 hidden md:inline-block">
            <CarouselNext className="text-[#DC143C]" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
