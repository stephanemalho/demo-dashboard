import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getContentHeight(state: string[]) {
  const itemCount = state.length;
  if (itemCount === 0) return "h-[0px]";
  if (itemCount === 1) return "h-[30px]";
  return "h-[75px]";
}