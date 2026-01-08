import ExploreEventSearchBar from "@/components/modules/ExploreEvent/ExploreEventSearchBar"
import { EventCard } from "@/components/modules/Home/EventCard"
import Pagination from "@/components/shared/Pagination"
import { getAllEventInfo } from "@/services/event/eventManagement"
import { IAllEvent } from "@/types/event.interface"

interface ISearchParamsProps{
  searchParams: {
    searchTerm?: string,
    category?:string,
    location?: string,
    page?:string
  }
} 

export default async function ExploreEventPage({searchParams}:ISearchParamsProps ) {
  const params = await searchParams
  const {data} = await getAllEventInfo(params)
  const allEvents = data?.events || []
  const totalEvents = data?.totalEvents ?? 0
  const itemPerPage = 3 
  const totalPage = Math.ceil((totalEvents)/itemPerPage)
  
  return (
    <div className='container mx-auto my-10 space-y-10'>
      <div className="">
        <ExploreEventSearchBar/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-2 lg:p-0">
        {
          allEvents && allEvents?.map((event: IAllEvent)=> <EventCard key={event._id} event={event}/>)
        }
      </div>

      <div className="text-center">
        {
          allEvents.length === 0 && <p>No Event Found</p>
        }
      </div>

      <div>
        <Pagination totalPage={totalPage}/>
      </div>


    </div>
  )
}
