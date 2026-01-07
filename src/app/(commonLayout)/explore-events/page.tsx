import ExploreEventSearchBar from "@/components/modules/ExploreEvent/ExploreEventSearchBar"
import { EventCard } from "@/components/modules/Home/EventCard"
import { getAllEventInfo } from "@/services/event/eventManagement"
import { IAllEvent } from "@/types/event.interface"

export default async function page() {
  const {data} = await getAllEventInfo() 
  return (
    <div className='container mx-auto'>
      <div className="mt-10">
        <ExploreEventSearchBar/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-2 lg:p-0">
        {
          data && data.map((event: IAllEvent)=> <EventCard key={event._id} event={event}/>)
        }
      </div>

      <div>
        {/* <Pagination/> */}
      </div>


    </div>
  )
}
