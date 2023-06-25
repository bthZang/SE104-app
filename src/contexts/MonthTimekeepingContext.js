import { createContext } from "react";


export const monthTimekeepingDataDefault = [
]

export const MONTHTIMEKEEPING_DATA_STORAGE_NAME = 'monthTimekeepingData'

export const persistentMonthTimekeepingData = JSON.parse(localStorage.getItem(MONTHTIMEKEEPING_DATA_STORAGE_NAME))

export const monthTimekeepingData = persistentMonthTimekeepingData || monthTimekeepingDataDefault

export const MonthTimekeepingContext = createContext({
    monthTimekeepingData,
    setMonthTimekeepingData: (index, newData) => {
        monthTimekeepingData[index] = newData
        localStorage.setItem(MONTHTIMEKEEPING_DATA_STORAGE_NAME, monthTimekeepingData)
    }
})