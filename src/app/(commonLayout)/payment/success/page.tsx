import { Button } from "@/components/ui/button";
import { Check, PartyPopper } from "lucide-react";
import Link from "next/link";

export default async function SuccessPage() {
  
 

  return (
    <div className='min-h-screen flex justify-center items-center p-2 md:p-0 '>
        <div className="shadow-lg shadow-green-400 border border-green-500 rounded-lg flex flex-col items-center p-10 space-y-3">
            <div className="w-32 h-32 rounded-full p-2 border flex justify-center items-center bg-green-400 shadow-2xl shadow-green-400">
                <Check className="text-green-950" size={60}/>
            </div>
            <div className="flex flex-col items-center space-y-3">
                <h1 className="text-2xl text-green-700 font-bold flex gap-2">Payment Successfully <PartyPopper/></h1>
                <p className="text-center text-muted-foreground">Your payment has been successfully processed. <br /> Now you can go to the Homepage and Explore new events.</p>
                <Link href={"/"}>
                <Button variant={"outline"}  className="w-full bg-green-400 cursor-pointer">Back To Home</Button>
                </Link>
            </div>

        </div>
    </div>
  )
}
