import { createContext } from "react";


export const employeeDataDefault = [
    { id: '#00001', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Bùi Thị Hoàng Giang', gender: 'Male', birthdate: '06/05/2002', department: 'unknown', position: 'unknown' },
    { id: '#00002', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Nguyễn Hoàng Hy', gender: 'Male', birthdate: '01/12/2003', department: 'unknown', position: 'unknown' },
    { id: '#00003', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Ngô Quang Khải', gender: 'Male', birthdate: '27/12/2003', department: 'unknown', position: 'unknown' },
    { id: '#00004', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Đinh Quang Dương', gender: 'Male', birthdate: '02/09/2003', department: 'unknown', position: 'unknown' },
    { id: '#00005', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Nguyễn Tuấn Khang', gender: 'Male', birthdate: '10/10/2003', department: 'unknown', position: 'unknown' },
    { id: '#00006', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Nguyễn Đức Thành Duy', gender: 'Male', birthdate: '24/03/2003', department: 'unknown', position: 'unknown' },
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