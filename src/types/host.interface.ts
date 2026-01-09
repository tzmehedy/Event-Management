export interface IEvent {
  category: string;
  date: string;
  description: string;
  event_status: string;
  host: string;
  image: string;
  joining_fee: number;
  location: string;
  organizer_name: string;
  time: string;
  title: string;
  total_no_of_booking: number;
  total_participants: number;
  _id: string;
}

export interface IParams {
  searchTerm?: string;
  status?: string;
  sortBy?: string;
  page?: string
}

export interface IParticipants {
  _id: string
  user: User
  event: string
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

export interface Payment {
  _id: string
  transactionId: string
  payment_status: string
  amount: number
}
