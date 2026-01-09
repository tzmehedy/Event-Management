import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoutes, UserRole } from "./auth-utils";

const getCommonSideBarItems = (role:UserRole): NavSection[] =>{
    const defaultDashboard = getDefaultDashboardRoutes(role)
    return [
        {
            title: "Dashboard",
            items: [
                {
                    title: "Dashboard Home",
                    url: defaultDashboard,
                    icon: "House"
                },
                {
                    title: "Profile",
                    url: "/my-profile",
                    icon: "User"
                }
            ]
        
        }

    ]
}

const getUserSideBarItems: NavSection[] = [
    {
        title: "Management",
        items: [
            {
                title: "My-Events",
                url: "/dashboard/my-events",
                icon: "CalendarDays"
            }
        ]
    }
]
const getAdminSideBarItems: NavSection[] = [
    {
        title: "Management",
        items: [
            {
                title: "All Users",
                url: "/admin/dashboard/all-users",
                icon: "Users"
            },
            {
                title: "All Events",
                url: "/admin/dashboard/all-events",
                icon: "CalendarDays"
            },
            {
                title: "To Be Host Request",
                url:"/admin/dashboard/become-host-request",
                icon:"CircleQuestionMark"
            }
        ]
    }
]
const getHostSideBarItems: NavSection[] = [
    {
        title: "Management",
        items: [
            {
                title: "Create Event",
                url: "/host/dashboard/create-event",
                icon: "CirclePlus"
            },
            {
                title: "Published Events",
                url: "/host/dashboard/published-events",
                icon: "CalendarDays"
            },
        ]
    }
]


export const getSidebarItemsByRole = (role: UserRole): NavSection[] =>{
    const commonSidebarItems = getCommonSideBarItems(role)

    switch(role){
        case "USER":
            return [...commonSidebarItems,...getUserSideBarItems]
        case "HOST":
            return [...commonSidebarItems, ...getHostSideBarItems]
        case "ADMIN":
            return [...commonSidebarItems, ...getAdminSideBarItems]
        default:
            return []
    }

}
