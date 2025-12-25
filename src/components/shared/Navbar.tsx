import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Logo from "../../../public/assets/logo/Logo";
import { getCookie } from "@/lib/tokenHandler";
import { getUserInfo } from "@/services/auth/getUserInfo";
import ProfileButton from "../ProfileButton";
import { getDefaultDashboardRoutes } from "@/lib/auth-utils";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { active: true, href: "/", label: "Home" },
  { href: "/explore-events", label: "Explore Events" },
];

export default async function Navbar() {
  const accessToken = await getCookie("accessToken")
  const userInfo = await getUserInfo()
  const dashboardHome =await getDefaultDashboardRoutes(userInfo?.role)

  return (
    <header className="border-b px-4 md:px-6 container mx-auto">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                size="icon"
                variant="ghost"
              >
                <svg
                  className="pointer-events-none"
                  fill="none"
                  height={16}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="-translate-y-1.75 origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                    d="M4 12L20 12"
                  />
                  <path
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    d="M4 12H20"
                  />
                  <path
                    className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                    d="M4 12H20"
                  />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem className="w-full" key={link.label}>
                      <NavigationMenuLink
                        active={link.active}
                        className="py-1.5"
                        href={link.href}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Main nav */}
          <div className="flex justify-between items-center gap-6">
            <Link
              className="text-primary hover:text-primary/90 flex items-center space-x-2"
              href="/"
            >
              <Logo />
              <h1 className="text-3xl font-bold text-[#DC143C] hidden lg:inline-block">
                <span className="text-[#111827]">Event</span> Management
              </h1>
            </Link>
          </div>
        </div>

        {/* middle side */}

        <div>
          {/* Navigation menu */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-5">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  {/* <NavigationMenuLink className=" font-medium text-muted-foreground hover:text-primary"> */}
                  <Link
                    href={link.href}
                    className="font-medium text-muted-foreground hover:text-primary"
                  >
                    {" "}
                    {link.label}
                  </Link>
                  {/* </NavigationMenuLink> */}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div >
          {accessToken ? (
            <div className="flex items-center gap-2">
            
              <Button
                className="text-sm cursor-pointer"
                disabled={!accessToken}
              >
                Become a host
              </Button>
              <ProfileButton name={userInfo?.name ? userInfo?.name : "Unknown User"} dashboardHome={dashboardHome}/>
            </div>
          ) : (
            <Button
              asChild
              className="text-sm cursor-pointer"
              variant="outline"
            >
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
