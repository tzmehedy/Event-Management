/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/lib/server-fetch"

export const getEventInfo = async(id: string):Promise<any> =>{
    try {
        const res = await serverFetch.get(`/event/${id}`).then((res)=>res.json())

        return res

    } catch (error:any) {
        return {
            success:false,
            message: error?.message
        }
        
    }

}

export const getAllEventInfo = async():Promise<any> =>{
    try {
        const res = await serverFetch.get("/event",{
            next: {
                tags: ["Events"]
            }
        }).then((res)=>res.json())
        return res
        
    } catch (error:any) {
        return {
            success:false,
            message: error?.message
        }
        
    }
}