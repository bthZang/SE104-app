import axios from 'axios';
import Swal from 'sweetalert2';
import { CANDIDATE_API } from '../constant/apiURL';


export const getAllCandidate = async () => {
    try {
        const res = await axios.get(`${CANDIDATE_API}/all`)
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

export const addCandidate = async (firstName, lastName, email, gender, applyPosition, cv) => {
    try {
        const res = await axios.post(`${CANDIDATE_API}/save`, {firstName, lastName, email, gender, applyPosition, cv})
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

export const uploadInterviewResult = async (id, file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.put(`${CANDIDATE_API}/update/${id}`, formData)
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

export const rejectCandidate = async (id) => {
    try {
        const res = await axios.delete(`${CANDIDATE_API}/reject?id=${id}`)
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

export const acceptCandidate = async (id) => {
    try {
        const res = await axios.post(`${CANDIDATE_API}/accept?id=${id}`)
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


