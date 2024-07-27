import { Thumbnail } from "@/types/thumbnail";
import { useMemo } from "react";
//SET To LocalStorage
export const saveToLocalStorage = (key: any, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};
// GET From LocalStorage
export const getFromLocalStorage = (key: any) => {
  return typeof window !== "undefined"
    ? localStorage.getItem(key)
      ? localStorage.getItem(key)
      : null
    : null;
};
//  Remove from LocalStorage
export const removeFromLocalStorage = (key: any) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const formatDuration = (hours: any): any => {
  const totalMinutes = hours * 60;
  const formattedHours = Math.floor(totalMinutes / 60);
  const formattedMinutes = Math.round(totalMinutes % 60);

  if (formattedHours === 0) {
    return `${formattedMinutes} minutes`;
  } else {
    return `${formattedHours} hours ${formattedMinutes} minutes`;
  }
};

export const constructImageUrl = (thumbnail: Thumbnail): string => {
  if (!thumbnail) {
    return "";
  }
  const { domain, basePath, key, qualities } = thumbnail;
  const quality = qualities && qualities.length > 0 ? qualities[0] : 10;
  return `${domain}/${basePath}/${quality}/${key}`;
};
