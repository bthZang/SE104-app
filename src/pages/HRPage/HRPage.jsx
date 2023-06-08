
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import "./HRPage.scss"

import HRSideBar from "../../components/HRSideBar/HRSideBar";
import Employee from "../../components/employee/employee";
import DayTimeKeeping from "../../components/dayTimeKeeping/dayTimeKeeping";
import Candidate from "../../components/candidate/candidate";
import Dashboard from "../../components/dashboard/dashboard";
import CustomButton from "../../components/CustomButton/CustomButton";
import Confirm from "../../components/Confirm/Confirm";
import MonthTimeKeeping from "../../components/monthTimeKeeping/monthTimeKeeping";
import TitleHome from "../../components/titleHome/titleHome";


const employeeData = [
  { id: '#00001',birthplace: 'ketui',ethnictity:'kinh', citizenId :'khongnoi', name: 'Bùi Thị Hoàng Giang', gender: 'Male', birthdate: '06/05/2002', department: 'unknown', position: 'unknown' },
  { id: '#00002',birthplace: 'ketui',ethnictity:'kinh', citizenId :'khongnoi', name: 'Nguyễn Hoàng Hy', gender: 'Male', birthdate: '01/12/2003', department: 'unknown', position: 'unknown' },
  { id: '#00003',birthplace: 'ketui',ethnictity:'kinh', citizenId :'khongnoi', name: 'Ngô Quang Khải', gender: 'Male', birthdate: '27/12/2003', department: 'unknown', position: 'unknown' },
  { id: '#00004',birthplace: 'ketui',ethnictity:'kinh', citizenId :'khongnoi', name: 'Đinh Quang Dương', gender: 'Male', birthdate: '02/09/2003', department: 'unknown', position: 'unknown' },
  { id: '#00005',birthplace: 'ketui',ethnictity:'kinh', citizenId :'khongnoi', name: 'Nguyễn Tuấn Khang', gender: 'Male', birthdate: '10/10/2003', department: 'unknown', position: 'unknown' },
  { id: '#00006',birthplace: 'ketui',ethnictity:'kinh', citizenId :'khongnoi', name: 'Nguyễn Đức Thành Duy', gender: 'Male', birthdate: '24/03/2003', department: 'unknown', position: 'unknown' },
  

]

const candidateData = [
  { name: 'Example1', CV: 'Male', applyPosition: 'CFO' },
  { name: 'Example2', CV: 'Male', applyPosition: 'CFO' },
  { name: 'Example3', CV: 'Male', applyPosition: 'CFO' },
  { name: 'Example4', CV: 'Male', applyPosition: 'CFO' },
  { name: 'Example5', CV: 'Male', applyPosition: 'CFO' },
  { name: 'Example6', CV: 'Male', applyPosition: 'CFO' },
  { name: 'Example7', CV: 'Male', applyPosition: 'CFO' },
  { name: 'Example8', CV: 'Male', applyPosition: 'CFO' },



]

const dayTimeKeepingData = [
  { id: '#00001', name: 'Example', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '#00002', name: 'Example', department: 'Technical', position: 'P', in: 'D', out: 'P' },
  { id: '#00003', name: 'Example', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '#00004', name: 'Example', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '#00005', name: 'Example', department: 'Technical', position: 'P', in: 'D', out: 'P' },
  { id: '#00006', name: 'Example', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '#00007', name: 'Example', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '#00008', name: 'Example', department: 'HR', position: 'P', in: 'D', out: 'P' },
  { id: '#00009', name: 'Example', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '#00010', name: 'Example', department: 'HR', position: 'P', in: 'D', out: 'P' },



]

const monthTimeKeepingData = [
  { id: '#00001', name: 'Example', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P',eight: 'P',nine: 'P',ten: 'P', eleven: 'P',twelve: 'P',thirteen: 'P',fourteen: 'P',fifteen: 'P',sixteen: 'P',seventeen: 'P',eighteen: 'P',nineteen:'I',twenty: 'P',thirty: 'P',twentyNine: 'P',twentyEight: 'P',twentySeven: 'P',twentySix: 'P',twentyFive: 'P',twentyFour: 'P',twentyThree: 'P',twentyTwo: 'P',twentyOne: 'P',workingDays: '27', dayOff: '3', overtime: '4', total: '27' },
  { id: '#00002', name: 'Example', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P',eight: 'P',nine: 'P',ten: 'P', eleven: 'P',twelve: 'P',thirteen: 'P',fourteen: 'P',fifteen: 'P',sixteen: 'P',seventeen: 'P',eighteen: 'P',nineteen:'I',twenty: 'P',thirty: 'P',twentyNine: 'P',twentyEight: 'P',twentySeven: 'P',twentySix: 'P',twentyFive: 'P',twentyFour: 'P',twentyThree: 'P',twentyTwo: 'P',twentyOne: 'P',workingDays: '27', dayOff: '3', overtime: '4', total: '27' },
  { id: '#00003', name: 'Example', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P',eight: 'P',nine: 'P',ten: 'P', eleven: 'P',twelve: 'P',thirteen: 'P',fourteen: 'P',fifteen: 'P',sixteen: 'P',seventeen: 'P',eighteen: 'P',nineteen:'I',twenty: 'P',thirty: 'P',twentyNine: 'P',twentyEight: 'P',twentySeven: 'P',twentySix: 'P',twentyFive: 'P',twentyFour: 'P',twentyThree: 'P',twentyTwo: 'P',twentyOne: 'P',workingDays: '27', dayOff: '3', overtime: '4', total: '27' },
  { id: '#00004', name: 'Example', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P',eight: 'P',nine: 'P',ten: 'P', eleven: 'P',twelve: 'P',thirteen: 'P',fourteen: 'P',fifteen: 'P',sixteen: 'P',seventeen: 'P',eighteen: 'P',nineteen:'I',twenty: 'P',thirty: 'P',twentyNine: 'P',twentyEight: 'P',twentySeven: 'P',twentySix: 'P',twentyFive: 'P',twentyFour: 'P',twentyThree: 'P',twentyTwo: 'P',twentyOne: 'P',workingDays: '27', dayOff: '3', overtime: '4', total: '27' },
  { id: '#00005', name: 'Example', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P',eight: 'P',nine: 'P',ten: 'P', eleven: 'P',twelve: 'P',thirteen: 'P',fourteen: 'P',fifteen: 'P',sixteen: 'P',seventeen: 'P',eighteen: 'P',nineteen:'I',twenty: 'P',thirty: 'P',twentyNine: 'P',twentyEight: 'P',twentySeven: 'P',twentySix: 'P',twentyFive: 'P',twentyFour: 'P',twentyThree: 'P',twentyTwo: 'P',twentyOne: 'P',workingDays: '27', dayOff: '3', overtime: '4', total: '27' },
  { id: '#00006', name: 'Example', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P',eight: 'P',nine: 'P',ten: 'P', eleven: 'P',twelve: 'P',thirteen: 'P',fourteen: 'P',fifteen: 'P',sixteen: 'P',seventeen: 'P',eighteen: 'P',nineteen:'I',twenty: 'P',thirty: 'P',twentyNine: 'P',twentyEight: 'P',twentySeven: 'P',twentySix: 'P',twentyFive: 'P',twentyFour: 'P',twentyThree: 'P',twentyTwo: 'P',twentyOne: 'P',workingDays: '27', dayOff: '3', overtime: '4', total: '27' },
 


]

let data = 'Zangggg'

function HRPage() {
  const [tab, setTab] = useState('timekeeping');
  const handleChange = (status) => {
    setTab(status);
  };

  const [tabTimekeeping, setTabTimekepping] = useState('dayTimekeeping');

  const [tabTimekeepingBtn, setTabTimekeppingBtn] = useState('day');
  const handleChangeTabTimekeeping = (statusRef) => {
    setTabTimekeppingBtn(statusRef.current.id);
    //setTabTimekepping(statusRef)
  };

  const dayRef = useRef(null)
  const monthRef = useRef(null)

  const [id, setId] = useState(null)
  const handleOnClickID = (_id) => {
    setId(_id)
  }

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
        {tab == "dashboard" && <Dashboard data={data}></Dashboard>}
        {tab == "timekeeping" &&
          <div><TitleHome data={data}>Timekeeping</TitleHome>
            <div className="timekeepingStyle">
              <div id="day" ref={dayRef} className={tabTimekeepingBtn === 'day' ? 'blur' : 'nonBlur'} onClick={() => { handleChangeTabTimekeeping(dayRef) }}>
                <p >Today</p>
              </div>
              <div id="month" ref={monthRef} className={tabTimekeepingBtn === 'month' ? 'blur' : 'nonBlur'} onClick={() => { handleChangeTabTimekeeping(monthRef) }}>
                <p >Month</p>
              </div>

            </div>{tabTimekeepingBtn == "day" && <DayTimeKeeping dayTimeKeepingData={dayTimeKeepingData} ></DayTimeKeeping>}
            {tabTimekeepingBtn == "month" && <MonthTimeKeeping monthTimeKeepingData={monthTimeKeepingData}></MonthTimeKeeping>}
          </div>
        }
        {tab == "employee" && <Employee employeeData={employeeData} onClick={handleOnClickID}></Employee>}
        {tab == "candidate" && <Candidate data={data} newCandidateData={newCandidateData}  ></Candidate>}

        <div className="confirmBox">
          {dialogType == "accept" && <Confirm text={"candidate?"} onClose={() => setDialogType('')}
            onClick={onclick}
          >{"Accept"}</Confirm>}
          {dialogType == "reject" && <Confirm text={"candidate?"} onClose={() => setDialogType('')}
            onClick={onclick}
          >{"Reject"}</Confirm>}
        </div>
      </div>
    </div>

  )
}

export default HRPage;
