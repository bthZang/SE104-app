import { useState } from "react";
import Dropdown from "react-dropdown";

import "./AddAttachmentConfirm.scss";
//import { Button } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { TextField } from "@mui/material";
import Pin from "../../assets/pin.svg"

const AddAttachmentConfirm = ({ onClose, onClick }) => {

    const [attachment, setAttachment] = useState(null)
    const handleAttachment = (e) => {
        setAttachment(e.target.files[0])
    }


    return (
        <div className="addAttachmentConfirmContainer" onClick={onClose} >
            <div className="box" onClick={e => e.stopPropagation()}>
                <div className="change">
                    <p className="confirmText">
                        Add new<span style={{ color: '#1233E5' }}> Candidate</span>
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
                        <TextField
                            id="applyInputSignInForm"
                            variant="outlined"
                            label="Apply position"
                            sx={{ width: '100%' }}
                            style={{
                                paddingBottom: '23px',
                                alignSelf: 'center',
                            }}
                        // value={email}
                        />

                        <div >
                            <p className="textCV" >CV</p>
                            <label className="attachment">

                                <img src={Pin} className="imgPin" ></img>
                                {/* cai box nay se bi an */}
                                <input type="file" className="inputFile" onChange={handleAttachment} ></input>

                                {/* cai box nay hien thi len tren ne */}
                                <div className="inputFileBox" >{attachment?.name || 'No file attached'}</div>
                            </label>

                        </div>
                    </div>


                    <div>

                    </div>


                    <div className="confirmBtn">
                        <CustomButton onClick={onClick} style={{ width: "100%" }} type="long" >Add</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAttachmentConfirm;
