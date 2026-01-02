import SearchBar from '@/components/modules/Dashboard/Host/SearchBar'
import { serverFetch } from '@/lib/server-fetch'


export default async function PublishedEventsPage() {
  const res = await serverFetch.get("/host/published-event").then((res)=>res.json())

  console.log(res)

  return (
    <div className='space-y-5 container mx-auto'>
      <h1 className='text-[#DC143C] text-3xl font-bold'>All Events</h1>
      <p>Manage and monitor all your events.</p>
      <SearchBar/>

      <div>

      </div>

    </div>
  )
}
