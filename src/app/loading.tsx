import { Loader } from "lucide-react";

export default function loading() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Loader className="animate-spin"/>
    </div>
  )
}
