import './HRSideBar.scss'
import logo from "../../assets/images/LogoPNG.png"
import topSideBar from "../../assets/images/topSideBar.png"
import botLeftSideBar from "../../assets/images/botLeftSideBar.png"
import botRightSideBar from "../../assets/images/botRightSideBar.png"
import {useReducer, useState, useRef} from 'react';


const HRSideBar = ({handleChange}) => {
    //let tabStatus = 'nonChosen'
    const [tabStatus, setTabStatus] = useState('timekeeping');
    const handleTabClick = (tabRef) => {
        setTabStatus(tabRef.current.id);
    };

    const dashboardRef = useRef(null);
    const timekeepingRef = useRef(null);
    const employeeRef = useRef(null);
    const candidateRef = useRef(null);
    const payrollRef = useRef(null);


    return (
      <div className="sideBar">
        <div className="table">
          <div className="title">
            <img className="logo" src={logo}></img>
            <img className="topSideBar" src={topSideBar}></img>
          </div>
          <div className="top"></div>

          {/* <div id="dashboard" ref={dashboardRef} className={tabStatus === 'dashboard' ? "chosen" : "nonChosen"} onClick={() => {
                    handleTabClick(dashboardRef)
                    handleChange("dashboard")
                    }}>
                    <p className='text' >Dashboard</p>
                </div> */}

          <div
            id="timekeeping"
            ref={timekeepingRef}
            className={tabStatus === "timekeeping" ? "chosen" : "nonChosen"}
            onClick={() => {
              handleTabClick(timekeepingRef);
              handleChange("timekeeping");
            }}
          >
            <p className="text">Timekeeping</p>
          </div>

          <div
            id="employee"
            ref={employeeRef}
            className={tabStatus === "employee" ? "chosen" : "nonChosen"}
            onClick={() => {
              handleTabClick(employeeRef);
              handleChange("employee");
            }}
          >
            <p className="text">Employee</p>
          </div>

          <div
            id="candidate"
            ref={candidateRef}
            className={tabStatus === "candidate" ? "chosen" : "nonChosen"}
            onClick={() => {
              handleTabClick(candidateRef);
              handleChange("candidate");
            }}
          >
            <p className="text">Payroll</p>
          </div>
          <div
            id="payroll"
            ref={payrollRef}
            className={tabStatus === "payroll" ? "chosen" : "nonChosen"}
            onClick={() => {
              handleTabClick(payrollRef);
              handleChange("payroll");
            }}
          >
            <p className="text">Candidate</p>
          </div>

          <div className="last"></div>
          <img className="botLeftSideBar" src={botLeftSideBar}></img>
          <img className="botRightSideBar" src={botRightSideBar}></img>
        </div>
      </div>
    );

}

export default HRSideBar;