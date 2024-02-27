import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function returnDateAndTime(dateString: string) {
  var date = new Date(dateString);

  const dayWithMonthWithYear =
    date.getDate() +
    " " +
    date.toLocaleString("default", { month: "long" }).slice(0, 3) +
    " " +
    date.getFullYear();

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { dayWithMonthWithYear, time };
}
