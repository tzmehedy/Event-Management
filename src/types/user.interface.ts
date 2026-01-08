export interface IBookingEvent {
  _id: string
  user: User
  event: Event
  status: string
  guestCount: number
  __v: number
  payment: Payment
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
}

export interface Event {
  _id: string
  host: Host
  title: string
  category: string
  organizer_name: string
  date: string
  time: string
  location: string
  total_participants: number
  description: string
  image: string
  joining_fee: number
  event_status: string
  total_no_of_booking: number
  __v: number
  updatedAt: string
}

export interface Host {
  _id: string
  user: HostUser,
  approval_Status: string
}

export interface Payment {
  _id: string
  booking: string
  transactionId: string
  payment_status: string
  amount: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface HostUser{
    name: string,
    email: string,
    phone: string,
    picture: string
}
