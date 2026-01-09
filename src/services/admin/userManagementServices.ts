"use server"

import { serverFetch } from "@/lib/server-fetch"
import { revalidateTag } from "next/cache"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllUsers = async(params: {page:string}) =>{
    try {
        const result = await serverFetch.get(`/user/get-all-users?page=${params?.page}`, {
            next: {
                tags: ["Users"]
            }
        }).then((res)=>res.json())
        return result
        
    } catch (error:any) {
        return {
            success:false,
            message: error?.message
        }
        
    }
}

export const blockUnblock = async(payload: {user: string, isBlocked: boolean})=>{
    try {
        const res = await serverFetch.post("/user/blocked-unblocked", {
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then((res)=>res.json())

        if(res.success === true){
            revalidateTag("Users", {expire:0})
        }

        return res

        
    } catch (error:any) {
        return{
            success: false,
            message: error?.message
        }
        
    }

}