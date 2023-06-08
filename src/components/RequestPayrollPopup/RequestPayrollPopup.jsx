import { TextField, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { Modal, DatePicker } from "antd";


import FlexibleButton from '../FlexibleButton/FlexibleButton';

import './RequestPayrollPopup.scss'
import moment from "moment/moment";


export default function RequestPayrollPopup({ isOpen, handleCancel, handleSend }) {

    // useEffect(() => {
    //     if (!isOpen) {
    //         return;
    //     }
    // }, [isOpen]);
    // const monthFormat = 'YYYY/MM';

    const [selectedDate, setSelectedDate] = useState(null);
    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)

    const handleDateChange = (date, dateString) => {
        const formattedDate = moment(dateString).format('YYYY-MM');
        setSelectedDate(formattedDate);
    };

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
                    <FlexibleButton label="Send" onClick={() => handleSend(email, message, selectedDate)}></FlexibleButton>
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
                    <DatePicker picker="month" format="YYYY-MM" onChange={handleDateChange} />
                </div>
                <TextField id="emailInputRequestPayrollPopup" sx={{ width: '100%' }}
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter your email!"
                    multiline />
                <TextField id="messageInputRequestPayrollPopup" sx={{ width: '100%' }}
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write something..."
                    multiline />

            </div>
        </Modal>

    )
}

