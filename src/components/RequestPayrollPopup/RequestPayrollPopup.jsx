import { TextField, Typography } from "@mui/material"
import { useState, useEffect, useRef } from "react"
import { Modal, DatePicker } from "antd"


import FlexibleButton from '../FlexibleButton/FlexibleButton'

import './RequestPayrollPopup.scss'
import moment from "moment/moment"
import { verifyEmail } from "../../api/RequestAPI"


export default function RequestPayrollPopup({ isOpen, handleCancel, handleSend }) {

    // useEffect(() => {
    //     if (!isOpen) {
    //         return;
    //     }
    // }, [isOpen]);
    // const monthFormat = 'YYYY/MM';

    const [selectedDate, setSelectedDate] = useState(null);
    const [email, setEmail] = useState(null)

    const handleDateChange = (date, dateString) => {
        const formattedDate = moment(dateString).format('YYYY-MM');
        setSelectedDate(formattedDate);
    };

    



    return (
        <Modal
            open={isOpen}
            className="modalStyle"
            centered
            width={438}
            onCancel={handleCancel}
            footer={
                <div className="modalFooter">
                    <FlexibleButton label="Send" onClick={() => handleSend(email,  selectedDate)}></FlexibleButton>
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
                <TextField id="emailInputRequestPayrollPopup" 
                    sx={{ 
                        width: '100%',
                        '& input:invalid + fieldset': {
                            borderColor: 'red',
                            borderWidth: 1,
                          }, }}
                    // defaultValue="Please enter your email!"
                    label="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter your email!"
                     />
            </div>
        </Modal>

    )
}

