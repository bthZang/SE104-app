import { Children, forwardRef } from "react";


import avatar from "../../assets/images/LogoPNG.png"

import "./Display.scss";
import { color } from "@mui/system";
//import { Button } from "@mui/material";

const Display = forwardRef(({ children, type, onClick, data, isEditable }, ref) => {
    return (
        <div onClick={onClick} data={data} className='textBox'>
            {children}
            <input
                ref={ref}
                disabled={!isEditable}
                className='textDefautValue'
                type="text"
                defaultValue={data} 
                style={isEditable ? {
                    borderBottom: '3px solid #A0AEF5'
                } : {}}
            />
        </div>
    );
});

export default Display;
