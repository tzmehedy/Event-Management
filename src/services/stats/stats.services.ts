/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from './../../lib/server-fetch';
export const userStatsInfo =async() =>{
    try {
        const res = await serverFetch.get("/stats/user-stats").then((res)=>res.json())
        return res
    } catch (error: any) {
        return{
            success:false,
            message: error?.message
        }
    }

}

export const getHostStats = async() =>{
    try {
        const res = await serverFetch.get("/stats/host-stats").then((res)=>res.json())
        return res
    } catch (error: any) {
        return{
            success:false,
            message: error?.message
        }
    }
}


export const getAdminStats = async() =>{
    try {
        const res = await serverFetch.get("/stats/admin-stats").then((res)=>res.json())
        return res
        
    } catch (error: any) {
        return {
            success:false,
            message: error?.message
        }
    }
}