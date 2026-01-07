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
