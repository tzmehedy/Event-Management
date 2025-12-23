import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  Music,
  Paintbrush,
  Trophy,
  Users,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import sportsBG from "../../../../public/assets/images/sports.jpg"
import musicBG from "../../../../public/assets/images/music.jpg"
import foodBG from "../../../../public/assets/images/food.jpg"
import artBG from "../../../../public/assets/images/art.jpg"
import networkingBG from "../../../../public/assets/images/networking.jpg"
import wellnessBG from "../../../../public/assets/images/wellness.jpg"

export default function PopularCategories() {
  return (
    <div className="bg-[#111827] py-20 rounded-sm min-h-dvh">
      <div className="container mx-auto space-y-10 p-4 lg:p-0">
        <div className="text-white space-y-3">
          <h1 className="text-3xl font-bold">Popular Categories</h1>
          <p className="text-background/80">
            Find your tribe by exploring top interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* sports */}
          <Card
            className="max-w-dvw h-72  border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300 relative "
           
          >
            <div className="">
              <Image
                alt="sportsBG"
                src={sportsBG}
                quality={100}
                fill
                sizes="100vh"
                style={{
                  objectFit: "fill",
                }}
                className="rounded-xl bg-blend-darken "
              />
            </div>

            <div className="h-full w-full bg-black absolute opacity-20 top-0 rounded-xl">

              </div>
            <CardContent className="z-10">
              <div className="text-white flex flex-col items-center">
                <div className="bg-background/30 h-12 w-12 flex justify-center items-center rounded-full">
                  <Trophy />
                </div>
                <h1 className="text-xl">Sports</h1>
              </div>
            </CardContent>
          </Card>

          {/* music */}
          <Card
            className="max-w-dvw h-72  border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300 relative"
          >

            <div className=" ">
              <Image
                alt="musicBG"
                src={musicBG}
                quality={100}
                fill
                sizes="100vh"
                style={{
                  objectFit: "fill",
                }}
                className="rounded-xl"
              />
            </div>
            <div className="h-full w-full bg-black absolute opacity-20 top-0 rounded-xl">

              </div>
            <CardContent className="z-10">
              <div className="text-white flex flex-col items-center">
                <div className="bg-background/30 h-12 w-12 flex justify-center items-center rounded-full">
                  <Music />
                </div>
                <h1 className="text-xl">Music</h1>
              </div>
            </CardContent>
          </Card>

          {/* Food */}
          <Card
            className="max-w-dvw h-72  border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300 relative"
          >
            <div className="">
              <Image
                alt="foodBG"
                src={foodBG}
                quality={100}
                fill
                sizes="100vh"
                style={{
                  objectFit: "fill",
                }}
                className="rounded-xl"
              />
            </div>
            <div className="h-full w-full bg-black absolute opacity-20 top-0 rounded-xl">

              </div>
            <CardContent className="z-10">
              <div className="text-white flex flex-col items-center">
                <div className="bg-background/30 h-12 w-12 flex justify-center items-center rounded-full">
                  <Utensils />
                </div>
                <h1 className="text-xl">Food & Drinks</h1>
              </div>
            </CardContent>
          </Card>

          {/* art */}
          <Card
            className="max-w-dvw h-72 border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300 relative"
            
          >
            <div className="">
              <Image
                alt="artBG"
                src={artBG}
                quality={100}
                fill
                sizes="100vh"
                style={{
                  objectFit: "fill",
                }}
                className="rounded-xl"
              />
            </div>
            <div className="h-full w-full bg-black absolute opacity-20 top-0 rounded-xl">

              </div>
            <CardContent className="z-10">
              <div className="text-white flex flex-col items-center">
                <div className="bg-background/30 h-12 w-12 flex justify-center items-center rounded-full">
                  <Paintbrush />
                </div>
                <h1 className="text-xl">Art</h1>
              </div>
            </CardContent>
          </Card>

          {/* networking */}
          <Card
            className="max-w-dvw h-72 bg-cover border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300 relative"
           
          >
            <div className="">
              <Image
                alt="networkingBG"
                src={networkingBG}
                quality={100}
                fill
                sizes="100vh"
                style={{
                  objectFit: "fill",
                }}
                className="rounded-xl"
              />
            </div>
            <div className="h-full w-full bg-black absolute opacity-20 top-0 rounded-xl">

              </div>
            <CardContent className="z-10">
              <div className="text-white flex flex-col items-center">
                <div className="bg-background/30 h-12 w-12 flex justify-center items-center rounded-full">
                  <Users />
                </div>
                <h1 className="text-xl">Networking</h1>
              </div>
            </CardContent>
          </Card>

          {/* wellness */}
          <Card
            className="max-w-dvw h-72 bg-cover border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300 relative"
          >
            <div className="">
              <Image
                alt="wellnessBG"
                src={wellnessBG}
                quality={100}
                fill
                sizes="100vh"
                style={{
                  objectFit: "fill",
                }}
                className="rounded-xl"
              />
            </div>
            <div className="h-full w-full bg-black absolute opacity-20 top-0 rounded-xl">

              </div>
            <CardContent className="z-10">
              <div className="text-white flex flex-col items-center">
                <div className="bg-background/30 h-12 w-12 flex justify-center items-center rounded-full">
                  <Activity />
                </div>
                <h1 className="text-xl">Wellness</h1>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
