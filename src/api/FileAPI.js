import axios from 'axios';
import Swal from 'sweetalert2';
import { FILE_API } from '../constant/apiURL';



export const uploadFile = async (file) => {
    try{
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


export const downloadFile = async (filename) => {
    try {
        const res = await axios.get(`${FILE_API}/${filename}`
            , {
                responseType: 'blob',
            })

        const url = window.URL.createObjectURL(new Blob([res.data]));

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }
};