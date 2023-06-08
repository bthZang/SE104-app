import axios from 'axios';
import Swal from 'sweetalert2';
import { REQUEST_API } from '../constant/apiURL';


export const sendVerifyCode = async (toEmail) => {
    try {
        const res = await axios.post(`${REQUEST_API}/send`, { email: toEmail })
        // console.log(res.data)
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

export const addRequest = async (bodId, message, month) => {
    try {
        const res = await axios.post(`${REQUEST_API}/save`, { bodId, message, month })
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




