import { createContext } from "react";


export const payrollDataDefault = [
]



export const PAYROLL_DATA_STORAGE_NAME = 'payrollData'

export const persistentPayrollData = JSON.parse(localStorage.getItem(PAYROLL_DATA_STORAGE_NAME))

export const payrollData = persistentPayrollData || payrollDataDefault

export const PayrollContext = createContext({
    payrollData,
    setPayrollData: (index, newData) => {
        payrollData[index] = newData
        localStorage.setItem(PAYROLL_DATA_STORAGE_NAME, payrollData)
    }
})