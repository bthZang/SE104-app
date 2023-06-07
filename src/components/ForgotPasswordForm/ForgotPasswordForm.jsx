
import {
    Typography, TextField
} from '@mui/material'
import './ForgotPasswordForm.scss'
import FlexibleButton from '../FlexibleButton/FlexibleButton'


export default function ForgotPasswordForm() {
    return (
        <div className="containerForgotPasswordForm">
            <div className="inputContainerForgotPasswordForm">
                <div className="titleContainerForgotPasswordForm">
                    <Typography id="titleForgotPasswordForm" variant='h5'>Forgot password</Typography>
                    <Typography id="descriptionForgotPasswordForm" variant='h6'>Please enter your account email!</Typography>
                </div>
                <TextField id="emailInputForgotPasswordForm" label="Email" variant="outlined" sx={{ width: '45ch' }} />
            </div>
            <FlexibleButton type='solid' label='Enter' />
        </div>
    )
}
