import { createContext } from "react";


export const payrollDataDefault = [
       { id: '1', name: 'Khai Ngo ', workingDays: '25', overtime: '1',netSalaryGrade: 3.5},
       { id: '2', name: 'Hoang Giang ', workingDays: '25', overtime: '1',netSalaryGrade: 3.5},
       { id: '3', name: 'Tuong Vy', workingDays: '27', overtime: '1',netSalaryGrade: 3.5},
       { id: '4', name: 'Khanh Trinh', workingDays: '25', overtime: '1',netSalaryGrade: 3.5},

]


export const PAYROLL_DATA_STORAGE_NAME = 'payrollData'

export const persistentpayrollData = JSON.parse(localStorage.getItem(PAYROLL_DATA_STORAGE_NAME))

export const payrollData = persistentpayrollData || payrollDataDefault

export const PayrollContext = createContext({
    payrollData,
    setPayrollData: (index, newData) => {
        payrollData[index] = newData
        localStorage.setItem(PAYROLL_DATA_STORAGE_NAME, payrollData)
    }
})