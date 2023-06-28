import { createContext } from "react";
import { getAllEmployee } from "../api/EmployeeAPI";

export const employeeDataDefault = [
]



export const EMPLOYEE_DATA_STORAGE_NAME = 'employeeData'

export const persistentEmployeeData = JSON.parse(localStorage.getItem(EMPLOYEE_DATA_STORAGE_NAME))

export const employeeData = persistentEmployeeData || employeeDataDefault

export const EmployeeContext = createContext({
    employeeData,
    setEmployeeData: (index, newData) => {
        employeeData[index] = newData
        localStorage.setItem(EMPLOYEE_DATA_STORAGE_NAME, employeeData)
    }
})