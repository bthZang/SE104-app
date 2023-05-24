import { Children } from "react";
import moment from "moment/moment";

import "./TitleHome.scss"
import Search from "../search/search";

const TitleHome = ({children}) => {
    const now = moment().format('ddd, DD-MMM-YY, HH:mm A')

    return(
        <div className="containerTitleHome">
            
            <div className="title">
                {children}
            </div>
            <div className="line"></div>
            <div className="dAT">
                <p >{now}</p>
            
            </div>
            <div className="search"><Search></Search></div>
            
        </div>
    );
    }

export default TitleHome;