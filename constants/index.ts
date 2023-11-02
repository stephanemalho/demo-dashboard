import { SidebarLink } from "@/types";


export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/light.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/asleep.svg" },
  { value: "system", label: "System", icon: "/assets/icons/screen.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/chart.svg",
    route: "/",
    label: "Cockpit",
  },
  {
    imgURL: "/assets/icons/pie.svg",
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgURL: "/assets/icons/live-delivery.svg",
    route: ["/live-delivery/create","/live-delivery/list"],
    label: "Live Delivery",
  },
  {
    imgURL: "/assets/icons/versionning.svg",
    route: ["/versionning/chore","/versionning/process","/versionning/rule-page"],
    label: "Versionning",
  },
  {
    imgURL: "/assets/icons/query.svg",
    route: ["/query/chores","/query/process","/query/logs-page"],
    label: "Query",
  },
  {
    imgURL: "/assets/icons/statistic.svg",
    route: ["/statistics/ressources","/statistics/process"],
    label: "Statistics",
  },
  {
    imgURL: "/assets/icons/alert.svg",
    route: ["/alerts/management","/alerts/visualization"],
    label: "Alerts",
  },
  {
    imgURL: "/assets/icons/mapping.svg",
    route:["/mapping-page/globals-page"],
    label: "Mapping",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};