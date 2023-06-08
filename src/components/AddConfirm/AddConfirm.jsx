import { useState } from "react";
import Dropdown from "react-dropdown";

import "./AddConfirm.scss";
//import { Button } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { TextField } from "@mui/material";


const AddConfirm = ({ onClose, onClick }) => {





    return (
        <div className="addConfirmContainer" onClick={onClose} >
            <div className="box" onClick={e => e.stopPropagation()}>
                <div className="change">
                    <p className="confirmText">
                        Add <span style={{ color: '#1233E5' }}>new account</span>
                    </p>
                    <div className="topTable">
                    <TextField
                            id="firstNameInputSignInForm"
                            variant="outlined"
                            label="First name"
                            sx={{ width: '100%' }}
                            style={{
                                paddingBottom: '43px',
                                alignSelf: 'center',

                            }}
                        // value={email}
                        />
                        <TextField
                            id="lastNameInputSignInForm"
                            variant="outlined"
                            label="Last name"
                            sx={{ width: '100%' }}
                            style={{
                                paddingBottom: '43px',
                                alignSelf: 'center',

                            }}
                        // value={email}
                        />


                    </div>
                    <div className="confirmBtn">
                        <CustomButton onClick={onClick} style={{width: "100%" }} type="long" >Add</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddConfirm;
