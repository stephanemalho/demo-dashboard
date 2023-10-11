import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/dashboard",
    label: "Dashboard"
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: ["/live-delivery/create","/live-delivery/list"],
    label: "Live Delivery",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: ["/versionning/chore","/versionning/process","/versionning/rule"],
    label: "Versionning",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: ["/query/chores","/query/process","/query/logs"],
    label: "Query",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: ["/statistics/ressources","/statistics/process"],
    label: "Statistics",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: ["/alerts/management","/alerts/visualization"],
    label: "Alerts",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route:["/mapping/global"],
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