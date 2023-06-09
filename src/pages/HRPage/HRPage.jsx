
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

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
import { getAllEmployee } from "../../api/EmployeeAPI";
import { Button } from "antd";
import axios from "axios";
import { CANDIDATE_API } from "../../constant/apiURL";


const employeeData = [
  { id: '#00001', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Bùi Thị Hoàng Giang', gender: 'Male', birthdate: '06/05/2002', department: 'unknown', position: 'unknown' },
  { id: '#00002', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Nguyễn Hoàng Hy', gender: 'Male', birthdate: '01/12/2003', department: 'unknown', position: 'unknown' },
  { id: '#00003', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Ngô Quang Khải', gender: 'Male', birthdate: '27/12/2003', department: 'unknown', position: 'unknown' },
  { id: '#00004', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Đinh Quang Dương', gender: 'Male', birthdate: '02/09/2003', department: 'unknown', position: 'unknown' },
  { id: '#00005', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Nguyễn Tuấn Khang', gender: 'Male', birthdate: '10/10/2003', department: 'unknown', position: 'unknown' },
  { id: '#00006', birthplace: 'ketui', ethnictity: 'kinh', citizenId: 'khongnoi', name: 'Nguyễn Đức Thành Duy', gender: 'Male', birthdate: '24/03/2003', department: 'unknown', position: 'unknown' },


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

const dayTimeKeepingDataDeafault = [
  { id: '1', name: 'Khai Ngo', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '3', name: 'Giang Bui', department: 'Technical', position: 'P', in: 'D', out: 'P' },
  { id: '4', name: 'Hy Nguyen', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '5', name: 'Duy Nguyen', department: 'Accounting', position: 'P', in: 'D', out: 'P' },
  { id: '6', name: 'Khang Nguyen', department: 'Technical', position: 'P', in: 'D', out: 'P' },
  { id: '7', name: 'Da Nguyen', department: 'Accounting', position: 'P', in: 'D', out: 'P' },



]

const monthTimeKeepingDataDefault = [
  { id: '1', name: 'Khai Ngo', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P', eight: 'P', nine: 'P', ten: 'P', eleven: 'P', twelve: 'P', thirteen: 'P', fourteen: 'P', fifteen: 'P', sixteen: 'P', seventeen: 'P', eighteen: 'P', nineteen: 'T', twenty: 'P', thirty: 'P', twentyNine: 'P', twentyEight: 'P', twentySeven: 'P', twentySix: 'P', twentyFive: 'P', twentyFour: 'P', twentyThree: 'P', twentyTwo: 'P', twentyOne: 'P', workingDays: '3', dayOff: '25', overtime: '1', total: '30' },
  { id: '3', name: 'Giang Bui', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P', eight: 'P', nine: 'P', ten: 'P', eleven: 'P', twelve: 'P', thirteen: 'P', fourteen: 'P', fifteen: 'P', sixteen: 'P', seventeen: 'P', eighteen: 'P', nineteen: 'T', twenty: 'P', thirty: 'P', twentyNine: 'P', twentyEight: 'P', twentySeven: 'P', twentySix: 'P', twentyFive: 'P', twentyFour: 'P', twentyThree: 'P', twentyTwo: 'P', twentyOne: 'P', workingDays: '3', dayOff: '25', overtime: '1', total: '30' },
  { id: '4', name: 'Hy Nguyen', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P', eight: 'P', nine: 'P', ten: 'P', eleven: 'P', twelve: 'P', thirteen: 'P', fourteen: 'P', fifteen: 'P', sixteen: 'P', seventeen: 'P', eighteen: 'P', nineteen: 'T', twenty: 'P', thirty: 'P', twentyNine: 'P', twentyEight: 'P', twentySeven: 'P', twentySix: 'P', twentyFive: 'P', twentyFour: 'P', twentyThree: 'P', twentyTwo: 'P', twentyOne: 'P', workingDays: '3', dayOff: '25', overtime: '1', total: '30' },
  { id: '5', name: 'Duy Nguyen', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P', eight: 'P', nine: 'P', ten: 'P', eleven: 'P', twelve: 'P', thirteen: 'P', fourteen: 'P', fifteen: 'P', sixteen: 'P', seventeen: 'P', eighteen: 'P', nineteen: 'T', twenty: 'P', thirty: 'P', twentyNine: 'P', twentyEight: 'P', twentySeven: 'P', twentySix: 'P', twentyFive: 'P', twentyFour: 'P', twentyThree: 'P', twentyTwo: 'P', twentyOne: 'P', workingDays: '3', dayOff: '25', overtime: '1', total: '30' },
  { id: '6', name: 'Khang Nguyen', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P', eight: 'P', nine: 'P', ten: 'P', eleven: 'P', twelve: 'P', thirteen: 'P', fourteen: 'P', fifteen: 'P', sixteen: 'P', seventeen: 'P', eighteen: 'P', nineteen: 'T', twenty: 'P', thirty: 'P', twentyNine: 'P', twentyEight: 'P', twentySeven: 'P', twentySix: 'P', twentyFive: 'P', twentyFour: 'P', twentyThree: 'P', twentyTwo: 'P', twentyOne: 'P', workingDays: '3', dayOff: '25', overtime: '1', total: '30' },
  { id: '7', name: 'Da Nguyen', one: 'D', two: 'P', three: 'D', four: 'P', five: 'D', six: 'P', seven: 'P', eight: 'P', nine: 'P', ten: 'P', eleven: 'P', twelve: 'P', thirteen: 'P', fourteen: 'P', fifteen: 'P', sixteen: 'P', seventeen: 'P', eighteen: 'P', nineteen: 'T', twenty: 'P', thirty: 'P', twentyNine: 'P', twentyEight: 'P', twentySeven: 'P', twentySix: 'P', twentyFive: 'P', twentyFour: 'P', twentyThree: 'P', twentyTwo: 'P', twentyOne: 'P', workingDays: '3', dayOff: '25', overtime: '1', total: '30' },
]

let data = 'Zangggg'

function HRPage() {
  const [tab, setTab] = useState('timekeeping');
  const handleChange = (status) => {
    setTab(status);
  };
  const [searchValue, setSearchValue] = useState([])


  const [candidateData, setCandidateData] = useState([])

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${CANDIDATE_API}/all`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
      })
      setCandidateData(response.data)
    })()
  }, [])

  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0, onChange: () => { }, isClick: false })
  const [employeeData, setEmployeeData] = useState([])
  const [dayTimeKeepingData, setDayTimeKeepingData] = useState(dayTimeKeepingDataDeafault.map(d => ({
    ...d,
    position: 'Developer',
    in: new Date().toDateString(),
    out: new Date().toDateString()
  })))
  const handleChangeFunction = (d, index, key) => (state) => {
    setMonthTimeKeepingData(prev => {
      d = prev[index]
      const newData = [...prev.map(d => ({ ...d }))]
      const keys = Object.keys(d)
      let P = 0;
      let D = 0;
      let T = 0;
      keys.forEach(key_ => {
        console.log({key: d[key_]})
        if (key_ != key) {

          if (d[key_]?.props?.children == 'P' || d[key_] == 'P') P += 1;
          if (d[key_]?.props?.children == 'D' || d[key_] == 'D') D += 1;
          if (d[key_]?.props?.children == 'T' || d[key_] == 'T') T += 1;
        } else {
          if (state == 'P') P += 1;
          if (state == 'D') D += 1;
          if (state == 'T') T += 1;
          if (d[key_]?.props?.children == 'P' || d[key_] == 'P') P -= 1;
          if (d[key_]?.props?.children == 'D' || d[key_] == 'D') D -= 1;
          if (d[key_]?.props?.children == 'T' || d[key_] == 'T') T -= 1;
        }
      })
      newData[index].dayOff = P
      newData[index].workingDays = D
      newData[index].overtime = T
      newData[index][key] = <CustomButton style={{ margin: 3, color: 'white', width: 45 }} type={'short'} onClick={(e) => {
        setClickPosition({
          x: e.clientX, y: e.clientY, onChange: handleChangeFunction(d, index, key), isClick: true
        })
      }}>{state}</CustomButton>
      return newData
    })
  }
  const newMonthTimeKeepingDataDefault = monthTimeKeepingDataDefault.map((d, index) => {
    const keys = Object.keys(d)
    const o = { ...d }
    const infoKey = ['id', 'name', 'workingDays', 'dayOff', 'overtime', 'total']
    keys.forEach(key => {
      if (!infoKey.includes(key)) {
        o[key] = <CustomButton style={{ margin: 3, color: 'white', width: 45 }} type={'short'} onClick={(e) => {
          setClickPosition({
            x: e.clientX, y: e.clientY, onChange: handleChangeFunction(d, index, key), isClick: true
          })
        }}>{d[key]}</CustomButton>
      }
    })
    return o
  })
  const [monthTimeKeepingData, setMonthTimeKeepingData] = useState(newMonthTimeKeepingDataDefault)

  useEffect(() => {
    (async () => {
      const employees = await getAllEmployee()
      const mapEmployees = employees.map(d => ({ ...d, name: d.firstName + " " + d.lastName }))
      setEmployeeData(mapEmployees)
    })()
  }, [])

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
    name: data.firstName + " " + data.lastName,
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
      {
        clickPosition.isClick && <div style={{
          top: clickPosition.y,
          left: clickPosition.x
        }} className="popup">
          <button onClick={() => {
            setClickPosition(prev => ({ ...prev, isClick: false }))
            clickPosition.onChange('D')
          }}>Work</button>
          <button onClick={() => {
            setClickPosition(prev => ({ ...prev, isClick: false }))
            clickPosition.onChange('P')
          }}>Not work</button>
          <button onClick={() => {
            setClickPosition(prev => ({ ...prev, isClick: false }))
            clickPosition.onChange('T')
          }}>Overtime</button>
        </div>
      }
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
