import "./Payroll.scss"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { useState } from "react";

const options =['May', 'July', 'Mar']

export default function Payroll () {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return(
        <div className="container">
            <div className="dropDown">
                <Dropdown 
                    width={400}
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                    placeholder="Slect a month"
                    className="custom"
                ></Dropdown>
            </div>
            <div className="table">
                <div className="rowHeader"></div>
            </div>
            hiiihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhifffi</div>
    );

}
