export type UserRole = "USER" | "ADMIN" | "HOST";

export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

export const authRoutes = ["/login", "/register"];

export const commonProtectedRoutes: RouteConfig = {
  exact: ["/my-profile"],
  patterns: [],
};

export const userProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/dashboard/],
};

export const hostProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/host/],
};

export const adminProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/admin/],
};

export const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route) => route === pathname);
};

export const isRouteMatches = (pathname: string, routes: RouteConfig) => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
};

export const getRouteOwner = (
  pathname: string
): "USER" | "HOST" | "ADMIN" | "COMMON" | "PUBLIC" => {
  if (isRouteMatches(pathname, userProtectedRoutes)) {
    return "USER";
  }

  if (isRouteMatches(pathname, hostProtectedRoutes)) {
    return "HOST";
  }

  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return "ADMIN";
  }

  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return "COMMON";
  }

  return "PUBLIC";
};

export const getDefaultDashboardRoutes = (role: string) => {
  if (role === "USER") {
    return "/dashboard";
  }
  if (role === "ADMIN") {
    return "/admin/dashboard";
  }
  if (role === "HOST") {
    return "/host/dashboard";
  }
  return "/";
};

export const isValidRedirectForRole = (redirectPath: string, role: UserRole): boolean => {
    const routeOwner = getRouteOwner(redirectPath);
    if (routeOwner === null || routeOwner === "COMMON") {
        return true;
    }
    if (routeOwner === role) {
        return true;
    }
    return false;
}