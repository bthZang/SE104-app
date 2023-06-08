
import {
    Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton
} from '@mui/material'

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './SignInForm.scss'
import FlexibleButton from '../FlexibleButton/FlexibleButton';
import signInRequest from '../../api/SignInAPI';
import Swal from 'sweetalert2';
import { loginPost, selectAuthStatus, selectUserRole } from '../../app/reducer/authReducer';



export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const authStatus = useSelector(selectAuthStatus)

    const userRole = useSelector(selectUserRole)

    const navigate = useNavigate()

    const successAlert = () => {
        Swal.fire({
            icon: 'success',
            text: 'Login successful!',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        })
    }

    if (authStatus == 'succeeded') {
        successAlert()
        switch (userRole) {
            case "ADMIN":
                navigate('/admin')
                break
            case "HR":
                navigate('/hr')
                break
            case "ACCOUNTANT":
                navigate('/accountant')
                break
            default:
                break
        }
    }


    const login = (event) => {
        event.preventDefault()

        dispatch(loginPost({ email, password }))


    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = event => {
        event.preventDefault()
    };
    return (
        <div className="containerSignInForm">
            <div className="inputContainerSignInForm">
                <Typography id="titleSignInForm" variant='h4'>Welcome!</Typography>
                <TextField
                    id="emailInputSignInForm"
                    variant="outlined"
                    label="Email"
                    sx={{ width: '45ch' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl sx={{ width: '45ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
            </div>
            <div className="buttonContainerSignInForm">
                <FlexibleButton type='solid' label='Login' onClick={login} />
                <Typography id="forgotPasswordBtnSignInForm" variant='body1' onClick={() => {
                    navigate('/login/forgot-password')
                }}>Forgot password?</Typography>
            </div>

        </div>
        // <></>
    );
}