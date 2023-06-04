
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./HRPage.scss"

import HRSideBar from "../../components/HRSideBar/HRSideBar";
import Employee from "../../components/employee/employee";
import DayTimeKeeping from "../../components/dayTimeKeeping/dayTimeKeeping";
import Candidate from "../../components/candidate/candidate";
import Dashboard from "../../components/dashboard/dashboard";
import CustomButton from "../../components/CustomButton/CustomButton";
import Confirm from "../../components/Confirm/Confirm";

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

const candidateData = [
  {name: 'Example1', CV: 'Male' ,applyPosition: 'CFO' },
  {name: 'Example2', CV: 'Male' ,applyPosition: 'CFO' },
  {name: 'Example3', CV: 'Male' ,applyPosition: 'CFO' },
  {name: 'Example4', CV: 'Male' ,applyPosition: 'CFO' },
  {name: 'Example5', CV: 'Male' ,applyPosition: 'CFO' },
  {name: 'Example6', CV: 'Male' ,applyPosition: 'CFO' },
  {name: 'Example7', CV: 'Male' ,applyPosition: 'CFO' },
  {name: 'Example8', CV: 'Male' ,applyPosition: 'CFO' },

  

]

function HRPage() {
    const [tab, setTab] = useState('dashboard');
    const handleChange = (status) => {
    setTab(status);
  };

  const [dialogType, setDialogType] = useState('');
  const [email, setEmail] = useState('');

  const handleOnClick = (type, email) => {
    setEmail(email);
    setDialogType(type)
  };


  const newCandidateData = candidateData.map((data) => ({
    ...data,
    acceptBtn: (
      <CustomButton
        onClick={() => {
          handleOnClick('accept', data.email);
        }}
        type={"short"}
      >
        Accept
      </CustomButton>
    ),
    rejectBtn: (
      <CustomButton
        onClick={() => {
          handleOnClick('reject', data.email);
        }}
        type={"short"}
      >
        Reject
      </CustomButton>
    ),
  }));

  return (
    <div className="containerHRPage">
        <div className="HRSideBar">
           <HRSideBar handleChange={handleChange}></HRSideBar>
        </div>
       <div className="content" >
        {tab == "dashboard" && <Dashboard></Dashboard>  } 
        {tab == "timekeeping" && <DayTimeKeeping></DayTimeKeeping>  } 
        {tab == "employee" && <Employee employeeData={employeeData}></Employee>  } 
        {tab == "candidate" && <Candidate newCandidateData={newCandidateData}  ></Candidate>  } 

        <div className="confirmBox">
          {dialogType == "accept" && <Confirm  text={"candidate?"} onClose={() => setDialogType('')}
            onClick={onclick}
          >{"Accept"}</Confirm>}
          {dialogType == "reject" && <Confirm  text={"candidate?"} onClose={() => setDialogType('')}
            onClick={onclick}
          >{"Reject"}</Confirm>}
        </div>
       </div>
    </div>
   
  )
}

export default HRPage;
