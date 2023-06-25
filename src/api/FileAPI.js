import axios from 'axios';
import Swal from 'sweetalert2';
import { FILE_API } from '../constant/apiURL';



export const uploadFile = async (file) => {
    try {
        console.log(file)
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post(`${FILE_API}`, formData)
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