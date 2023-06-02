
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./HRPage.scss"

import HRSideBar from "../../components/HRSideBar/HRSideBar";
import Employee from "../../components/employee/employee";
import DayTimeKeeping from "../../components/dayTimeKeeping/dayTimeKeeping";
import Candidate from "../../components/candidate/candidate";
import Dashboard from "../../components/dashboard/dashboard";



const employeeData = [
  {id: '#00001', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
  {id: '#00002', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
  {id: '#00003', name: 'Example', gender: 'Female' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
  {id: '#00004', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
  {id: '#00005', name: 'Example', gender: 'Female' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
  {id: '#00006', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
  {id: '#00007', name: 'Example', gender: 'Female' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
  {id: '#00008', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
  {id: '#00009', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
 

]

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
        {tab == "employee" && <Employee employeeData={employeeData}></Employee>  } 
        {tab == "candidate" && <Candidate></Candidate>  } 
       </div>
    </div>
   
  )
}

export default HRPage;
