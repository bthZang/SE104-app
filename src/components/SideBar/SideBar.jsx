import './SideBar.scss'
import logo from "../../assets/images/LogoPNG.png"
import topSideBar from "../../assets/images/topSideBar.png"
import botLeftSideBar from "../../assets/images/botLeftSideBar.png"
import botRightSideBar from "../../assets/images/botRightSideBar.png"
import {useReducer, useState, useRef} from 'react';


const SideBar = ({handleChange}) => {
    //let tabStatus = 'nonChosen'
    const [tabStatus, setTabStatus] = useState('payroll');
    const handleTabClick = (tabRef) => {
        setTabStatus(tabRef.current.id);
    };

    const payrollRef = useRef(null);
    const requestRef = useRef(null);


    return(
        <div className="sideBar">
            <div className="table">
                <div className="title"> 
                    <img className="logo" src={logo} ></img>
                    <img className="topSideBar" src={topSideBar} ></img>
                </div>
                <div className='top'></div>
                <div id="payroll" ref={payrollRef} className={tabStatus === 'payroll' ? "chosen" : "nonChosen"} onClick={() => {
                    handleTabClick(payrollRef)
                    handleChange("payroll")
                    }}>
                    <p className='text' >Payroll</p>
                </div>
                <div id="request" ref={requestRef} className={tabStatus === 'request' ? "chosen" : "nonChosen"} onClick={() => {
                    handleTabClick(requestRef)
                    handleChange("request")
                    }}>
                    <p className='text' >Request</p>
                </div>
                <div className='last'>
                                      
                </div>
                <img className="botLeftSideBar" src={botLeftSideBar} ></img>
                <img className="botRightSideBar" src={botRightSideBar} ></img>

            </div>
            </div>
    );

}

export default SideBar;