import { Button } from '@/components/ui/button'
import { EventCard } from './EventCard'
import { getAllEventInfo } from '@/services/event/eventManagement'
import { IAllEvent } from '@/types/event.interface'
import Link from 'next/link'

export default async function FeatureEvents() {
  const {data} = await getAllEventInfo()
 
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-center p-2 lg:p-0'>
        <div>
            <h1 className='text-3xl font-bold'>Featured Events</h1>
            <p>Don&apos;t miss out on these trending experiences.</p>

        </div>
        <div>
            <Link href={"/explore-events"} className=''><Button variant="ghost" className='border border-[#DC143C] text-[#DC143C] font-bold cursor-pointer'>View All Event</Button></Link>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-2 lg:p-0'>
        
        {
          data && data.slice(0,3).map((event: IAllEvent)=> <EventCard key={event._id} event={event}/>)
        }
      </div>


    </div>
  )
}
