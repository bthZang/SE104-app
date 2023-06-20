import { createContext } from "react";

export const dayTimekeepingDataDefault = [
  {
    id: "1",
    name: "Khai Ngo",
    department: "Accounting",
    position: "P",
    in: "D",
    out: "P",
  },
  {
    id: "3",
    name: "Giang Bui",
    department: "Technical",
    position: "P",
    in: "D",
    out: "P",
  },
  {
    id: "4",
    name: "Hy Nguyen",
    department: "Accounting",
    position: "P",
    in: "D",
    out: "P",
  },
  {
    id: "5",
    name: "Duy Nguyen",
    department: "Accounting",
    position: "P",
    in: "D",
    out: "P",
  },
  {
    id: "6",
    name: "Khang Nguyen",
    department: "Technical",
    position: "P",
    in: "D",
    out: "P",
  },
  {
    id: "7",
    name: "Da Nguyen",
    department: "Accounting",
    position: "P",
    in: "D",
    out: "P",
  },
];

export const DAYTIMEKEEPING_DATA_STORAGE_NAME = "dayTimekeepingData";

export const persistentDayTimekeepingData = JSON.parse(
  localStorage.getItem(DAYTIMEKEEPING_DATA_STORAGE_NAME)
);

export const dayTimekeepingData =
  persistentDayTimekeepingData || dayTimekeepingDataDefault;

export const DayTimekeepingContext = createContext({
  dayTimekeepingData,
  setDayTimekeepingData: (index, newData) => {
    dayTimekeepingData[index] = newData;
    localStorage.setItem(DAYTIMEKEEPING_DATA_STORAGE_NAME, dayTimekeepingData);
  },
});
