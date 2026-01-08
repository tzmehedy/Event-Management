import BookingEventCard from "@/components/modules/Dashboard/User/BookingEventCard"
import Pagination from "@/components/shared/Pagination"
import { myBookingEvent } from "@/services/event/eventManagement"
import { IBookingEvent } from "@/types/user.interface"

export default async function MyEventPage({searchParams}: {searchParams: {page?:string}}) {
  const params = await searchParams 
  const {data} = await myBookingEvent({page: params.page || '1'})
  const bookingsInfo = data?.events
  const totalBookings = data?.totalBookings || 0
  const itemPerPage = 3
  const totalPage = Math.ceil(totalBookings/itemPerPage)
 
  return (
    <div className="container mx-auto my-4">
        <div className="space-y-2">
          <h1 className="text-3xl underline font-bold text-[#DC143C]">Your Booking Events</h1>
          <p className="text-muted-foreground">Explore your booking event</p>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {
            bookingsInfo && bookingsInfo?.map((event: IBookingEvent)=> <BookingEventCard key={event._id} event={event}/>)
          }
        </div>
        <div className="mt-3">
          <Pagination totalPage={totalPage}/>
        </div>
    </div>
  )
}
