import axios from 'axios';
import Swal from 'sweetalert2';
import { DAILYTK_API } from '../constant/apiURL';


export const getAllDailyTkByEmployeeAndMonth = async (staffId, month) => {
    try {
        const res = await axios.get(`${DAILYTK_API}/all/${staffId}?month=${month}`)
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


