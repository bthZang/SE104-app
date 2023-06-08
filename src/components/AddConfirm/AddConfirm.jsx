import { useState } from "react";
import Dropdown from "react-dropdown";

import "./AddConfirm.scss";
//import { Button } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { TextField } from "@mui/material";
import { useRef } from "react";
import { addUser } from "../../api/AdminAPI";


const AddConfirm = ({ onClose, onClick }) => {


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const accessToken = localStorage.getItem('accessToken')

    const handleAddUser = () =>{
        addUser(accessToken, email, name)
    }

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
                            label="Email"
                            sx={{ width: '100%' }}
                            style={{
                                paddingBottom: '43px',
                                alignSelf: 'center',

                            }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="lastNameInputSignInForm"
                            variant="outlined"
                            label="Name"
                            sx={{ width: '100%' }}
                            style={{
                                paddingBottom: '43px',
                                alignSelf: 'center',

                            }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />


                    </div>
                    <div className="confirmBtn">
                        <CustomButton onClick={handleAddUser} style={{width: "100%" }} type="long" >Add</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddConfirm;
