"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/server-fetch";
import { IParams } from "@/types/host.interface";
import { revalidateTag } from "next/cache";

export const createEvent = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      organizer_name: formData.get("organizer_name"),
      date: formData.get("event_date"),
      time: formData.get("time"),
      location: formData.get("location"),
      total_participants: Number(formData.get("total_capacity")),
      description: formData.get("description"),
      joining_fee: Number(formData.get("price")),
    };

    const file = formData.get("image");

    const newEventFormData = new FormData();
    newEventFormData.append("data", JSON.stringify(data));
    newEventFormData.append("file", file as Blob);

    const res = await serverFetch
      .post("/event/create-event", {
        body: newEventFormData,
      })
      .then((res) => res.json());

    return res;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const getPublishedEvents = async (params: IParams): Promise<any> => {
  try {
    const res = await serverFetch
      .get(`/host/published-event?searchTerm=${params.searchTerm}&&status=${params.status}&&sortBy=${params.sortBy}&&page=${params.page}`, {
        next: {
          tags: ["HostEvents"],
        },
      })
      .then((res) => res.json());
    return res;
  } catch (error: any) {
    return error?.message;
  }
};

export const updateEvent = async (_currentState: any, formData: FormData):Promise<any> => {
  try {
    const data = {
      _id: formData.get("_id"),
      title: formData.get("title"),
      category: formData.get("category"),
      organizer_name: formData.get("organizer_name"),
      date: formData.get("event_date"),
      time: formData.get("time"),
      location: formData.get("location"),
      total_participants: Number(formData.get("total_capacity")),
      description: formData.get("description"),
      joining_fee: Number(formData.get("price")),
      event_status: formData.get("status"),
    }

    const file = formData.get("image") 
  
    const newUpdatedFormData = new FormData()
    newUpdatedFormData.append("data", JSON.stringify(data))

    if(file){
      newUpdatedFormData.append("file", file as Blob)
    }

    const res = await serverFetch.patch(`/event/update/${data._id}`, {
      body: newUpdatedFormData
    }).then((res)=>res.json())
    return res

  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};


export const deleteEvent = async(eventId:string) =>{
  try {

    const res = await serverFetch.delete(`/event/delete/${eventId}`).then((res)=>res.json())

    if(res.success === true){
      revalidateTag("HostEvents", {expire: 0})
    }

    return res
    
  } catch (error: any) {
    return {
      success:false,
      message: error?.message
    }
    
  }

}
