import axios from 'axios';
import Swal from 'sweetalert2';
import { REQUEST_API } from '../constant/apiURL';


export const verifyEmail = async (email) => {
    try {
        console.log(email)
        const res = await axios.post(`${REQUEST_API}/verify`, {email: email})
        
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

export const addRequest = async (email, message, month) => {
    try {
        const res = await axios.post(`${REQUEST_API}/save`, { email, message, month })
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

export const sendRequest = async (email, file) => {
    console.log(email, file)
    try {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post(`${REQUEST_API}/send/${email}`, formData)
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




