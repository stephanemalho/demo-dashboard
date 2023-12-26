import { SidebarLink } from "@/types";


export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/light.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/asleep.svg" },
  { value: "system", label: "System", icon: "/assets/icons/screen.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Cockpit",
  },
  {
    imgURL: "/assets/icons/dashboard.svg",
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgURL: "/assets/icons/delivery.svg",
    route: ["/live-delivery/create","/live-delivery/list"],
    label: "Live Delivery",
  },
  {
    imgURL: "/assets/icons/branch.svg",
    route: ["/versionning/chore","/versionning/process","/versionning/rule-page"],
    label: "Versionning",
  },
  {
    imgURL: "/assets/icons/ibm-watson--query.svg",
    route: ["/query/chores","/query/process","/query/logs-page"],
    label: "Query",
  },
  {
    imgURL: "/assets/icons/analytics.svg",
    route: ["/statistics/ressources","/statistics/process"],
    label: "Statistics",
  },
  {
    imgURL: "/assets/icons/warning--alt.svg",
    route: ["/alerts/management","/alerts/visualization"],
    label: "Alerts",
  },
  {
    imgURL: "/assets/icons/plan.svg",
    route:["/mapping-page/globals-page"],
    label: "Mapping",
  },
];

