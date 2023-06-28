import Swal from "sweetalert2"
import { EMPLOYEE_API } from "../constant/apiURL"
import axios from "axios"

export async function getAllEmployee() {
    // const accessToken = localStorage.getItem('accessToken')
    try {
        const res = await axios.get(`${EMPLOYEE_API}/all`)
        // console.log({ employee: res.data })
        return res.data
    } catch (error) {
        console.log({ error })
        Swal.fire({
            icon: 'error',
            text: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

export const getOneEmployee = async (accessToken, id) => {
    try {
        const res = await axios.get(`${EMPLOYEE_API}?id=${id}`
        )

        return res.data
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }
};

export async function deleteEmployeeById(id) {
    // const accessToken = localStorage.getItem('accessToken')
    try {
        const res = await axios.delete(`${EMPLOYEE_API}/delete?id=${id}`)
        // console.log(res.data, id)
        return res.data
    } catch (error) {
        console.log({ error })
        Swal.fire({
            icon: 'error',
            text: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

export async function addMultiEmployee(list) {
    try {

        const res = await axios.post(`${EMPLOYEE_API}/save/multi`, list)
        // console.log( res.data )
        return res.data
    } catch (error) {
        console.log({ error })
        Swal.fire({
            icon: 'error',
            text: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

export async function updateEmployee(id, data) {
    try {
        console.log("do call update," ,data)
        const res = await axios.put(`${EMPLOYEE_API}/update?id=${id}`, data)
        console.log( res.data )
        return res.data
    } catch (error) {
        console.log({ error })
        Swal.fire({
            icon: 'error',
            text: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }
}


