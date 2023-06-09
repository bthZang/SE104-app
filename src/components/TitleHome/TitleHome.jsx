import { useState , useRef} from "react";
import moment from "moment/moment";
// import {avatar} from "../../assets/images/Clock.png"
import avatar from "../../assets/images/LogoPNG.png"

import "./TitleHome.scss"
import Search from "../search/search";
import Profile from "../Profile/Profile";
import UserAccount from "../UserAccount/UserAccount";

const TitleHome = ({children, showSearch = true, data, onChangeSearch, style} ) => {
    const now = moment().format('ddd, DD-MMM-YY, HH:mm A')
    
    const [click, setClick]=useState(false)
    const handleOnClick=(status)=>{
        setClick(status.current.id)
    }

    const userRef = useRef(null);


    return(
        <div className="containerTitleHome">
            <div id='user' ref={userRef} className="avatar" onClick={()=>{handleOnClick(userRef)}}>
                <img src={avatar} style={{width:'70px'}}/>
            </div>
            {click == 'user'  && <UserAccount data={data} onClose={() => setClick(false)}></UserAccount>}
            <div className="title">
                {children}
            </div>
            <div className="line"></div>
            <div className="dAT">
                <p >{now}</p>
            
            </div>
          {showSearch &&  <div className="search"><Search onSearch={onChangeSearch}></Search></div>}
            
        </div>
    );
    }

export default TitleHome;