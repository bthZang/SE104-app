import axios from 'axios';
import Swal from 'sweetalert2';
import { USER_API } from '../constant/apiURL';


export const getAllUser = async (accessToken, role) => {
    try {
        const res = await axios.get(`${USER_API}/all`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                role: role,
            }
        })
        return res.data
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Somethign went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }
};

export const updateUserRole = async (accessToken, id, role) => {
    try {
        const res = await axios.put(`${USER_API}/updateRole/${id}/${role}`, {}, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        }
        )
        console.log(res.data)
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

export const addUser = async (accessToken, email, name) => {
    try {
        console.log(accessToken, email, name)
        const res = await axios.post(`${USER_API}/save`, { email, name }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        })
        console.log(accessToken, email, name, res.data)
        return res.data
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
        console.log(error)
    }
};




