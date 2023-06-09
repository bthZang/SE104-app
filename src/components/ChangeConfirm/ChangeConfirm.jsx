import { Children, useState } from "react";
import Dropdown from "react-dropdown";

import "./ChangeConfirm.scss";
//import { Button } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { updateUserRole } from "../../api/AdminAPI";



const ChangeConfirm = ({ onClose, onClick, options, userData, handleChange }) => {

    const [selectedOptions, setSelectedOptions] = useState(null);
    const handleOnChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        console.log(selectedOptions);
    };

    const handleOnChangeClick = async () => {
        var userRole
        switch (selectedOptions.value) {
            case "HR Deparment":
                userRole = 'HR'
                break
            case "Accounting Deparment":
                userRole = 'ACCOUNTANT'
                break
            case "Board of Director":
                userRole = 'BOD'
                break
            case "None Access":
                userRole = 'USER'
                break
            default:
                break
        }
        await updateUserRole(userData.accessToken, userData.id, userRole)
        handleChange()
    }



    return (
        <div className="changeConfirmContainer" onClick={onClose} >
            <div className="box" onClick={e => e.stopPropagation()}>
                <div className="change">
                    <p className="confirmText">
                        Change <span style={{ color: '#1233E5' }}>permission</span>
                    </p>
                    <div className="topTable">
                        <Dropdown
                            //width={200}
                            options={options}
                            value={selectedOptions}
                            onChange={handleOnChange}
                            placeholder="Select access right"
                            className="customChangeDropdown"
                        ></Dropdown></div>
                    <div className="confirmBtn">
                        <CustomButton onClick={() => { handleOnChangeClick() }} style={{ width: "100%" }} type="long" >Change</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeConfirm;
