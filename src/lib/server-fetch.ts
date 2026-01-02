import { getCookie } from "./tokenHandler"

const Backend_url = process.env.NEXT_PUBLIC_BASE_API_URL

const serverFetchHelper = async(endpoint: string, options: RequestInit): Promise<Response> =>{
    const {headers, ...restOptions} = options
    const accessToken = await getCookie("accessToken")

    const res = await fetch(`${Backend_url}${endpoint}`, {
        headers: {
            ...headers,
            Cookie: accessToken? `accessToken=${accessToken}` : ""
        },
        ...restOptions,
        credentials: "include"
    })
    return res
}

export const serverFetch = {
    get: async(endpoint: string, options?:RequestInit): Promise<Response>=>serverFetchHelper(endpoint, {...options, method: "GET"}),
    post: async(endpoint: string, options:RequestInit): Promise<Response>=>serverFetchHelper(endpoint, {...options, method: "POST"}),
    patch: async(endpoint: string, options:RequestInit): Promise<Response>=>serverFetchHelper(endpoint, {...options, method: "PATCH"}),
    put: async(endpoint: string, options:RequestInit): Promise<Response>=>serverFetchHelper(endpoint, {...options, method: "PUT"}),
    delete: async(endpoint: string, options:RequestInit): Promise<Response>=>serverFetchHelper(endpoint, {...options, method: "DELETE"})
}