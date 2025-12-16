import { Button } from '@/components/ui/button'
import React from 'react'
import { EventCard } from './EventCard'

export default function FeatureEvents() {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-center p-2 lg:p-0'>
        <div>
            <h1 className='text-3xl font-bold'>Featured Events</h1>
            <p>Don&apos;t miss out on these trending experiences.</p>

        </div>
        <div>
            <Button variant="ghost" className='border border-[#DC143C] text-[#DC143C] font-bold'>View All Event</Button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-2 lg:p-0'>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>


    </div>
  )
}
