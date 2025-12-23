import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

type UserRole = "USER" | "ADMIN" | "HOST"

type RouteConfig = {
    exact: string[],
    patterns: RegExp[]
}

const authRoutes = ["/login", "/register"]

const commonProtectedRoutes: RouteConfig = {
    exact: ["/my-profile"],
    patterns: []
}

const userProtectedRoutes: RouteConfig ={
    exact: [],
    patterns: [/^\/dashboard/]
}

const hostProtectedRoutes: RouteConfig = {
    exact: [],
    patterns: [/^\/host/]
}

const adminProtectedRoutes: RouteConfig = {
    exact: [],
    patterns: [/^\/admin/]
}

const isAuthRoute = (pathname: string)=>{
    return authRoutes.some((route)=> route === pathname)
}

const isRouteMatches = (pathname: string, routes: RouteConfig) =>{
    if(routes.exact.includes(pathname)){
        return true
    }
    return routes.patterns.some((pattern: RegExp) => pattern.test(pathname))
}

const getRouteOwner = (pathname: string) : "USER" |"HOST"|"ADMIN"|"COMMON"|"PUBLIC" =>{
    if(isRouteMatches(pathname, userProtectedRoutes)){
        return "USER"
    }

    if(isRouteMatches(pathname,hostProtectedRoutes )){
        return "HOST"
    }

    if(isRouteMatches(pathname, adminProtectedRoutes)){
        return "ADMIN"
    }

    if(isRouteMatches(pathname, commonProtectedRoutes)){
        return "COMMON"
    }

    return "PUBLIC"
}


const getDefaultDashboardRoutes = (role: string) =>{
    if(role==="user"){
        return "/dashboard"
    }
    if(role==="ADMIN"){
        return "/admin/dashboard"
    }
    if(role==="HOST"){
        return "/host/dashboard"
    }
    return "/"
}
 

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname 
    console.log(pathname)
  return NextResponse.next()
}
 

 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}