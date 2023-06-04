import { useState } from "react";
import Dropdown from "react-dropdown";

import "./AddAttachmentConfirm.scss";
//import { Button } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
// import { TextField } from "@mui/material";
import Pin from "../../assets/pin.svg"

const AddAttachmentConfirm = ({ onClose, onClick }) => {





    return (
        <div className="addAttachmentConfirmContainer" onClick={onClose} >
            <div className="box" onClick={e => e.stopPropagation()}>
                <div className="change">
                    <p className="confirmText">
                        Add new<span style={{ color: '#1233E5' }}> candidate</span>
                    </p>
                    <div className="topTable">
                    </div>


                    <div>
                        <p className="textCV" >CV</p>
                        <div className="attachment">
                            <image src={Pin} className="imgPin" ></image>
                            <input type="file" className="inputFile" ></input>
                        </div>
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
