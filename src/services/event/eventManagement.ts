/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import {
  IEventBookingPayload,
  IGetEventsParams,
} from "@/types/event.interface";
import { revalidateTag } from "next/cache";

export const getEventInfo = async (id: string): Promise<any> => {
  try {
    const res = await serverFetch.get(`/event/${id}`).then((res) => res.json());
    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const getAllEventInfo = async (
  params: IGetEventsParams | null
): Promise<any> => {
  try {
    const res = await serverFetch
      .get(
        `/event?searchTerm=${params?.searchTerm}&&category=${params?.category}&&location=${params?.location}&&page=${params?.page}`,
        {
          next: {
            tags: ["Events"],
          },
        }
      )
      .then((res) => res.json());
    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const bookingEvent = async (bookingPayload: IEventBookingPayload) => {
  try {
    const res = await serverFetch
      .post("/booking/create-booking", {
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bookingPayload),
      })
      .then((res) => res.json());

    if (res.success) {
      revalidateTag("MyBookings", { expire: 0 });
    }

    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const myBookingEvent = async (params: {page: string}) => {

  try {
    
    const res = await serverFetch
      .get(`/booking/my-bookings?page=${params?.page}`, {
        next: {
          tags: ["MyBookings"],
        },
      })
      .then((res) => res.json());

    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const initPayment = async (bookingId: string) => {
  try {
    const res = await serverFetch
      .post(`/payment/init-payment/${bookingId}`)
      .then((res) => res.json());

    if(res.success === true){
        revalidateTag("MyBookings", {expire: 0})
    }
    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};
