import { Children } from "react";
import moment from "moment/moment";

import "./TitleHome.scss"

const TitleHome = ({children}) => {
    const now = moment().format('ddd, DD-MMM-YY, HH:mm A')

    return(
        <div className="container">
            
            <div className="title">
                {children}
            </div>
            <div className="line"></div>
            <div className="dAT">
                <p >{now}</p>
            
            </div>
        </div>
    );
    }

export default TitleHome;