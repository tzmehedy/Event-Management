import { Card, CardContent } from "@/components/ui/card";
import { Activity, Music, Paintbrush, Trophy, Users, Utensils } from "lucide-react";

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
            className="max-w-dvw h-72 bg-cover border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url("/assets/images/sports.jpg")`,
            }}
          >
            <CardContent className="">
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
            className="max-w-dvw h-72 bg-cover border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url("/assets/images/music.jpg")`,
            }}
          >
            <CardContent className="">
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
            className="max-w-dvw h-72 bg-cover border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url("/assets/images/food.jpg")`,
            }}
          >
            <CardContent className="">
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
            className="max-w-dvw h-72 bg-cover border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url("/assets/images/art.jpg")`,
            }}
          >
            <CardContent className="">
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
            className="max-w-dvw h-72 bg-cover border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url("/assets/images/networking.jpg")`,
            }}
          >
            <CardContent className="">
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
            className="max-w-dvw h-72 bg-cover border border-[#DC143C] flex justify-center items-center hover:opacity-80 transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url("/assets/images/wellness.jpg")`,
            }}
          >
            <CardContent className="">
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
