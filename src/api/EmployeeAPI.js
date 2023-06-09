import Swal from "sweetalert2"
import { EMPLOYEE_API } from "../constant/apiURL"
import axios from "axios"

export async function getAllEmployee() {
    const accessToken = localStorage.getItem('accessToken')
    try {
        const res = await axios.get(`${EMPLOYEE_API}/all`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        console.log({employee: res.data})
        return res.data
    } catch (error) {
        console.log({error})
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
        const res = await axios.get(`${EMPLOYEE_API}?id=${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    
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

// export const getAllEmployeeBy