export interface IAdminEvent {
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
  user: User
  approval_Status: string
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
  picture: string
}

export interface IBecomeHost {
  _id: string
  user: User
  approval_Status: string
  events: string
  createdAt: string
  updatedAt: string
}

export interface User {
  _id: string
  name: string
  email: string
  isBlocked: boolean
}

