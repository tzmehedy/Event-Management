import AllPublishedEventCard from '@/components/modules/Dashboard/Host/AllPublishedEventCard'
import SearchBar from '@/components/modules/Dashboard/Host/SearchBar'
import Pagination from '@/components/shared/Pagination'
import { getPublishedEvents } from '@/services/host/hostManagement'
import { IEvent } from '@/types/host.interface'

interface searchParamsProps{
  searchParams: {
    searchTerm?: string,
    status?:string,
    sortBy?: string,
    page?:string
  }
}

export default async function PublishedEventsPage({searchParams}: searchParamsProps) {
  const params = await searchParams
 
  const {data} = await getPublishedEvents(params)

  
  const allPublishedEvents = data?.events || []
  const itemsPerPage = 3
  const totalPage = Math.ceil((data?.totalEvents)/itemsPerPage)

  

  return (
    <div className='space-y-5 container mx-auto'>
      <h1 className='text-[#DC143C] text-3xl font-bold'>All Events</h1>
      <p>Manage and monitor all your events.</p>
      <div className=''>
        <SearchBar/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          allPublishedEvents && allPublishedEvents.map((event: IEvent)=> <AllPublishedEventCard event={event} key={event?._id}/>)
        }

      </div>

      <div className='text-center'>
        {
          allPublishedEvents?.length === 0 && <p>No Data Found</p>
        }
      </div>

      <div>
        <Pagination totalPage={totalPage}/>
      </div>

    </div>
  )
}
