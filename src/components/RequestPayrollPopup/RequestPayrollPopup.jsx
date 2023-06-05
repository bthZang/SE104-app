import { TextField, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { Modal, DatePicker } from "antd";

import FlexibleButton from '../FlexibleButton/FlexibleButton';

import './RequestPayrollPopup.scss'


export default function RequestPayrollPopup({ isOpen, handleCancel }) {

    // useEffect(() => {
    //     if (!isOpen) {
    //         return;
    //     }
    // }, [isOpen]);

    const test = () => {
        alert('success');
    }


    const sendRequest = () => {
        console.log("send");
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
                    <FlexibleButton label="Send" onClick={sendRequest}></FlexibleButton>
                </div>
            }
        >
            <div className="dialogContainerRequestPayrollPopup">
                <div className="dialogTitleRequestPayrollPopup">
                    <Typography id="titleRequestPayrollPopup" variant="h4" >Request payroll</Typography>
                    <Typography id="descriptionRequestPayrollPopup" variant="body2">Your request will be proccessed by Accounting Department</Typography>
                </div>
                <div className="monthPickerRequestPayrollPopup">
                    <Typography variant="subtitle2">Month:</Typography>
                    <DatePicker picker="month" />
                </div>
                <TextField id="messagelInputRequestPayrollPopup" sx={{ width: '100%' }}
                    label="Message"
                    placeholder="Write something..."
                    multiline />
            </div>
        </Modal>

    )
}

