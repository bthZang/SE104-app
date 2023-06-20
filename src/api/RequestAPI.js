import axios from 'axios';
import Swal from 'sweetalert2';
import { REQUEST_API } from '../constant/apiURL';


export const verifyEmail = async (_email) => {
    try {
        const res = await axios.post(`${REQUEST_API}/verify`, { email: _email })
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




