import { SidebarLink } from "@/types";

export function lastSegmentOrder() {
  return (url: string) => {
    const segments = url.split("/");
    const lastSegment = segments[segments.length - 1];
    const capitalizedLastSegment =
      lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

    return capitalizedLastSegment;
  };
}

export function isRouteLength(pathname: string, item: SidebarLink) {
  return (pathname.includes(item.route) &&
    (Array.isArray(item.route) ? item.route.length > 1 : false)) ||
    pathname === item.route;
}

export function isRoute(pathname: string, item: SidebarLink) {
  return (pathname.includes(item.route) && item.route.length > 1) ||
    pathname === item.route;
}
