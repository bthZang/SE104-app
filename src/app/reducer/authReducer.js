import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_API } from "../../constant/apiURL";
import Swal from "sweetalert2";



export const loginPost = createAsyncThunk('authManagement/loginPost', async ({ email, password }) => {
    try {
        const res = await axios.post(`${AUTH_API}/login`, { email, password })
        localStorage.setItem('accessToken', res.data.access_token)
        localStorage.setItem('id', res.data.id)
        return res.data
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Incorrect email or password.',
            showConfirmButton: false,
            timer: 1500
        })
        throw error
        console.log(error)
        
    }
})

const initialState = {
    data: null,
    status: 'idle'
};

export const authManagementSlice = createSlice({
    name: 'authManagement',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginPost.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginPost.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(loginPost.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
})

export const selectAuthData = state => state.authManagement.data

export const selectAuthStatus = state => state.authManagement.status

export const selectAccessToken = state => (state.authManagement.data ? state.authManagement.data.access_token : '')

export const selectUserRole = state => (state.authManagement.data ? state.authManagement.data.user_role : '')

export const {setAccessToken} = authManagementSlice.actions

export default authManagementSlice.reducer