import './AdminSideBar.scss'
import logo from "../../assets/images/LogoPNG.png"
import topSideBar from "../../assets/images/topSideBar.png"
import botLeftSideBar from "../../assets/images/botLeftSideBar.png"
import botRightSideBar from "../../assets/images/botRightSideBar.png"
import {useReducer, useState, useRef} from 'react';


const AdminSideBar = ({handleChange}) => {
    //let tabStatus = 'nonChosen'
    const [tabStatus, setTabStatus] = useState('permission');
    const handleTabClick = (tabRef) => {
        setTabStatus(tabRef.current.id);
    };

    const permissionRef = useRef(null);
    const accountRef = useRef(null);


    return(
        <div className="sideBar">
            <div className="table">
                <div className="title"> 
                    <img className="logo" src={logo} ></img>
                    <img className="topSideBar" src={topSideBar} ></img>
                </div>
                <div className='top'></div>
                
                <div id="permission" ref={permissionRef} className={tabStatus === 'permission' ?  "chosen"  : "nonChosen"} onClick={() => {
                    handleTabClick(permissionRef)
                    handleChange("permission")
                    }}>
                    <p className='text' >Permission</p>
                </div>
                <div id="account" ref={accountRef} className={tabStatus === 'account' ? "chosen" : "nonChosen"} onClick={() => {
                    handleTabClick(accountRef)
                    handleChange("account")
                    }}>
                    <p className='text' >Account</p>
                </div>
                <div className='last'>
                                      
                </div>
                <img className="botLeftSideBar" src={botLeftSideBar} ></img>
                <img className="botRightSideBar" src={botRightSideBar} ></img>

            </div>
            </div>
    );

}

export default AdminSideBar;