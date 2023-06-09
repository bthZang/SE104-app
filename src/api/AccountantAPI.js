import axios from 'axios';
import Swal from 'sweetalert2';
import { PAYSLIP_API, REQUEST_API } from '../constant/apiURL';


export const getAllPayslip = async (accessToken) => {
    try {
        const res = await axios.get(`${PAYSLIP_API}/all`, {
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

export const getAllRequest = async (accessToken) => {
    try {
        const res = await axios.get(`${REQUEST_API}/all`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        // console.log(res.data)
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



