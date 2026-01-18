import { Globe, Heart, Shield, Zap } from "lucide-react";

export default function CoreValues() {
  return (
    <div className="bg-[#F9FAFB] py-20">
        <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Our Core Values</h1>
            <p className="text-muted-foreground">These principles guide every decision we make and every feature we build.</p>
        </div>

        <div className="mt-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-2 lg:p-0">
            <div className="bg-background shadow-lg px-5 py-10 rounded-xl space-y-5">
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-pink-200 ">
                    <Heart className="text-[#DC143C]"/>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl font-bold">Passion for Connection</h1>
                    <p>We believe that the best moments in life happen when people come together.</p>
                </div>

            </div>
            <div className="bg-background shadow-lg px-5 py-10 rounded-xl space-y-5">
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-pink-200 ">
                    <Globe className="text-[#DC143C]"/>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl font-bold">Global Community</h1>
                    <p>Building bridges across cultures through shared interests and experiences.</p>
                </div>

            </div>
            <div className="bg-background shadow-lg px-5 py-10 rounded-xl space-y-5">
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-pink-200 ">
                    <Shield className="text-[#DC143C]"/>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl font-bold">Trust & Safety</h1>
                    <p>Creating a secure environment where everyone feels welcome and respected.</p>
                </div>

            </div>
            <div className="bg-background shadow-lg px-5 py-10 rounded-xl space-y-5">
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-pink-200 ">
                    <Zap className="text-[#DC143C]"/>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl font-bold">Innovation</h1>
                    <p>Constantly pushing boundaries to make event planning seamless and fun.</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}
