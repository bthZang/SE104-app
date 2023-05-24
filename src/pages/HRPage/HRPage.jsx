
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./HRPage.scss"

import HRSideBar from "../../components/HRSideBar/HRSideBar";
import Employee from "../../components/employee/employee";
import DayTimeKeeping from "../../components/dayTimeKeeping/dayTimeKeeping";
import Candidate from "../../components/candidate/candidate";
import Dashboard from "../../components/dashboard/dashboard";


function HRPage() {
    const [tab, setTab] = useState('dashboard');
    const handleChange = (status) => {
    setTab(status);
  };
  return (
    <div className="containerHRPage">
        <div className="HRSideBar">
           <HRSideBar handleChange={handleChange}></HRSideBar>
        </div>
       <div className="content" >
        {tab == "dashboard" && <Dashboard></Dashboard>  } 
        {tab == "timekeeping" && <DayTimeKeeping></DayTimeKeeping>  } 
        {tab == "employee" && <Employee></Employee>  } 
        {tab == "candidate" && <Candidate></Candidate>  } 
       </div>
    </div>
   
  )
}

export default HRPage;
