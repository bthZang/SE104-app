import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as XLSX from 'xlsx';

import "./AccountingPage.scss"

import SideBar from "../../components/SideBar/SideBar";
import Payroll from "../../components/payroll/payroll";
import Request from "../../components/request/request";
import Confirm from "../../components/Confirm/Confirm";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useEffect } from "react";
import { getAllPayslip, getAllRequest , getAllTimekeeping} from "../../api/AccountantAPI";
import { selectAccessToken } from "../../app/reducer/authReducer";
import { useSelector } from "react-redux";

// const requestData =[
//   { id: '1', name: 'Khai Ngo ', workingDays: '25', overtime: '1',month: 2023-04, salaryGrade: 3.5,salary: , overtimePay: , healthInsurance:, socialInsurance:,
//   'Income tax', 'Allowances', 'Total'},
//   { id: '3', name: 'Giang Bui',  workingDays: '25',  overtime: '1'},
//   { id: '4', name: 'Hy Nguyen',  workingDays: '25', overtime: '1'},
//   { id: '5', name: 'Duy Nguyen',  workingDays: '30', overtime: '1' },
//   { id: '6', name: 'Khang Nguyen', workingDays: '25', vertime: '1' },
//   { id: '7', name: 'Da Nguyen', workingDays: '25', overtime: '1', },

// ]

function AccountingPage() {
  const [tab, setTab] = useState('payroll');
  const [payrollData, setPayrollData] = useState([])
  const [requestData, setRequestData] = useState([])
  const [timekeepingData, setTimekeepingData] = useState([])
  const handleChange = (status) => {
    setTab(status);
  };

  const accessToken = useSelector(selectAccessToken)

  useEffect(() => {
    getAllTimekeeping(accessToken)
    .then(response => {
      setTimekeepingData(response);

    })
    getAllPayslip(accessToken)
    .then(response => {
      setPayrollData(response);

    })
    
    getAllRequest(accessToken)
      .then(response => {
        setRequestData(response);

      })
  }, [])

  const newTimekeepingData = timekeepingData?.map((data) => ({
    ...data,
    payslip: (
      <CustomButton
        onClick={() => {
          handleOnClick('export', data.id);
        }}
        type={"short"}
      >
        Export
      </CustomButton>
    ),
  }));




  const newRequestData = requestData?.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('export', data.id);
        }}
        type={"short"}
      >
        Send
      </CustomButton>
    ),
  }));


  const [dialogType, setDialogType] = useState('');
  const [id, setId] = useState('');

  const handleOnClick = (type, id) => {
    setId(id);
    setDialogType(type)
  };


  const handleExportPayrollToExcel = () => {
    const row = payrollData.find((data) => data.id == id);

    const data = [
      ['ID', 'Name', 'Month', 'Salary grade', 'Workings day', 'Overtime', 'Salary', 'Overtime Pay', 'Health Insurance', 'Social Insurance',
    'Income tax', 'Allowances', 'Total'],
      [id, row.salary, row.overtime_pay, row.overTime, row.netSalary],
    ];
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  };

  const handleExportAllPayrollToExcel = () => {
    // const row = payrollData.find((data) => data.id == id);

    const data = [
      ['ID', 'Name', 'Working days', 'Over time', 'Salary'],]
    for (let i = 0; i < payrollData.length; i++) {
      data.push([payrollData[i].id, payrollData[i].name, payrollData[i].workingDays, payrollData[i].overTime, payrollData[i].netSalary])
    }
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  };

  return (
    <div className="containerAccountingPage">
      <div className="accountingSideBar">
        <SideBar handleChange={handleChange}></SideBar>
      </div>
      <div className="content" >
        {tab == "payroll" && <Payroll payrollData={timekeepingData} newPayrollData={newTimekeepingData} onClick={handleOnClick} />}
        {tab == "request" && <Request requestData={requestData} newRequestData={newRequestData}></Request>}

        <div className="confirmBox">
          {dialogType == "export" && <Confirm text={"payroll?"} onClose={() => setDialogType('')}
            onClick={handleExportPayrollToExcel}
          >{"Export"}</Confirm>}

          {dialogType == "exportAll" && <Confirm text={"all payroll?"} onClose={() => setDialogType('')}
            onClick={handleExportAllPayrollToExcel}
          >{"Export All"}</Confirm>}
        </div>
      </div>

    </div>

  )
}

export default AccountingPage;