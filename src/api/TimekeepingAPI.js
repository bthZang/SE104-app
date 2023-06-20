import axios from 'axios';
import Swal from 'sweetalert2';
import { TIMEKEEPING_API } from '../constant/apiURL';


export const getAllTimekeeping = async (month) => {
    try {
        const res = await axios.get(`${TIMEKEEPING_API}/all?month=${month}`)
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
