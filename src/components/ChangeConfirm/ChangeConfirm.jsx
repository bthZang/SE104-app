import { Children, useState } from "react";
import Dropdown from "react-dropdown";

import "./ChangeConfirm.scss";
//import { Button } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

const ChangeConfirm = ({ onClose, onClick }) => {

    const [selectedOptions, setSelectedOptions] = useState(null);
    const handleOnChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    const options = [
        "HR Deparment",
        "Accounting Deparment",
        "Board of Director",
        "None Access",
      ];
      
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
                        <CustomButton onClick={onClick} style={{ width: "100%" }} type="long" >Change</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeConfirm;
