import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_API } from "../../constant/apiURL";
import Swal from "sweetalert2";



export const getAllUser = createAsyncThunk('userManagement/getAllUser', async ({access_token, role }) => {
    try {

        const res = await axios.get(`${USER_API}/all`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            params: {
                role: role,
            }
        })

        return res.data
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Incorrect email or password.',
            showConfirmButton: false,
            timer: 1500
        })
    }
})

export const updateUserRole = createAsyncThunk('userManagement/updateUserRole', async ({access_token, id, role }) => {
    try {
        const res = await axios.put(`${USER_API}/updateRole?id=${id}`, role ,{
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
        )
        return res.data
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
        })
    }
})


const initialState = {
    data: null,
    status: 'idle'
};

export const userManagementSlice = createSlice({
    name: 'userManagement',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(getAllUser.rejected, (state, action) => {
                state.status = 'failed'
            })
            .addCase(updateUserRole.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateUserRole.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(updateUserRole.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
})

export const selectAllUser = state => state.authManagement.data

export const selectAuthStatus = state => state.authManagement.status

export const selectAccessToken = state => (state.authManagement.data ? state.authManagement.data.access_token : '')

export const selectUserRole = state => (state.authManagement.data ? state.authManagement.data.user_role : '')


export default userManagementSlice.reducer