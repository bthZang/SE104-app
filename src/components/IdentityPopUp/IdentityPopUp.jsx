import { TextField, Typography } from "@mui/material";
// import { useState, useEffect, useRef } from "react";
import { Modal } from "antd";


import FlexibleButton from '../FlexibleButton/FlexibleButton';

import './IdentityPopUp.scss'
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { useState } from "react";


export default function IdentityPopUp({ isOpen, handleCancel, handleVerify }) {

    // useEffect(() => {
    //     if (!isOpen) {
    //         return;
    //     }
    // }, [isOpen]);
    // const monthFormat = 'YYYY/MM';

    const [code, setCode] = useState(null)


    const test = () => {
        alert('success');
    }


    const sendRequest = () => {
        console.log("send");
        // console.log(selectedDate.toString())
    }



    return (
        <Modal
            open={isOpen}
            className="modalStyle"
            centered
            width={438}
            onCancel={handleCancel}
            footer={
                <div className="modalFooter">
                    <FlexibleButton label="Verify" onClick={() => handleVerify(code)}></FlexibleButton>
                </div>
            }
        >
            <div className="dialogContainerRequestPayrollPopup">
                <div className="dialogTitleRequestPayrollPopup">
                    <Typography id="titleRequestPayrollPopup" variant="h4" >Identity verification</Typography>
                    <Typography id="descriptionRequestPayrollPopup" variant="body2">Please check your email for verification code</Typography>
                </div>
                
                <TextField id="verifyCodelInputRequestPayrollPopup" sx={{ width: '100%' }}
                    label="Enter code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Please check your mail to get this code"
                     />
            </div>
        </Modal>

    )
}

