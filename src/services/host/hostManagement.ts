/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/lib/server-fetch"

export const createEvent = async(_currentState:any, formData:any):Promise<any> =>{

    try {

        const data= {
        title: formData.get("title"),
        category: formData.get("category"),
        organizer_name: formData.get("organizer_name"),
        date:formData.get("event_date"),
        time: formData.get("time"),
        location: formData.get("location"),
        total_participants: Number(formData.get("total_capacity")),
        description: formData.get("description"),
        joining_fee: Number(formData.get("price")),
    }


    const file = formData.get("image")

    const newEventFormData = new FormData()
    newEventFormData.append("data", JSON.stringify(data))
    newEventFormData.append("file", file as Blob)

    const res = await serverFetch.post("/event/create-event", {
        body: newEventFormData,
        

    }).then((res)=> res.json())

    return res
        
    } catch (error: any) {
        console.log(error)
        return {
            success: false,
            message: error?.message
        }
        
    }


}