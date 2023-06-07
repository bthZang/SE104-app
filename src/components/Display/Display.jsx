import { Children } from "react";


import avatar from "../../assets/images/LogoPNG.png"

import "./Display.scss";
import { color } from "@mui/system";
//import { Button } from "@mui/material";

const Display = ({ children, type, onClick, data }) => {
    return (
        <div onClick={onClick} data={data} className='textBox'>
            {children}
            <input className='textDefautValue' type="text" defaultValue={data}></input>
        </div>
    );
};

export default Display;
