import axios from 'axios';
import Swal from 'sweetalert2';
import { REQUEST_API } from '../constant/apiURL';


export const sendVerifyCode = async (toEmail) => {
    try {
        const res = await axios.post(`${REQUEST_API}/send`, {email: toEmail})
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




