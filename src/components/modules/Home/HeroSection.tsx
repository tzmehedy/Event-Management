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
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="absolute left-24 top-[50%] z-20">
        <CarouselPrevious />
      </div>

      <CarouselContent>
        <CarouselItem className="">
          <div className="">
            <Card
              className="h-172 bg-cover "
              style={{
                backgroundImage: `linear-gradient(
        rgba(0,0,0,0.45),
        rgba(0,0,0,0.45)
      ),url('/assets/images/HeroImage_1.jpg')`,
              }}
            >
              <CardContent className="h-full flex items-center justify-center p-6">
                <div className="text-center p-5 space-y-5">
                  <h1 className="text-5xl font-bold text-[#111827]">
                    Discover Amazing
                  </h1>
                  <h1 className="text-5xl font-bold text-[#DC143C]">
                    Events Near You
                  </h1>
                  <p className="text-muted/90">
                    Join thousands of people finding and creating unforgettable{" "}
                    <br />
                    experiences every single day.
                  </p>

                  <div className="flex justify-center space-x-5">
                    <Button className="bg-[#DC143C] text-white font-bold">
                      <Search /> Find Activities
                    </Button>
                    <Button variant="ghost" className="border border-[#DC143C] text-white font-bold">
                      <Plus /> Create Event
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="">
            <Card
              className="h-172 bg-cover "
              style={{
                backgroundImage: `linear-gradient(
        rgba(0,0,0,0.45),
        rgba(0,0,0,0.45)
      ),url('/assets/images/HeroImage_2.jpg')`,
              }}
            >
              <CardContent className="h-full flex  items-center justify-center p-6">
                <div className="text-center p-5 space-y-5">
                  <h1 className="text-5xl font-bold text-[#111827]">
                    Discover Amazing
                  </h1>
                  <h1 className="text-5xl font-bold text-[#DC143C]">
                    Events Near You
                  </h1>
                  <p className="text-muted/90">
                    Join thousands of people finding and creating unforgettable{" "}
                    <br />
                    experiences every single day.
                  </p>

                  <div className="flex justify-center space-x-5">
                    <Button className="bg-[#DC143C] text-white font-bold">
                      <Search /> Find Activities
                    </Button>
                    <Button variant="ghost" className="border border-[#DC143C] text-white font-bold">
                      <Plus /> Create Event
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>

      <div className="absolute right-24 top-[50%] z-20">
        <CarouselNext />
      </div>
    </Carousel>
  );
}
