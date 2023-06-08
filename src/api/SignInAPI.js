import axios from 'axios';
import { AUTH_API } from '../constant/apiURL';
import Swal from 'sweetalert2';




const signInRequest = async (email, password) => {
    try {
        console.log(email, password)
        const res = await axios.post(`${AUTH_API}/login`, { email, password })
        return res.data;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Incorrect email or password.',
            showConfirmButton: false,
            timer: 1500
        })
    }
};

export default signInRequest;