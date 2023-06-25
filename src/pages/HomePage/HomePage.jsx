import "./HomePage.scss"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo.svg'
import RequestPayrollPopup from '../../components/RequestPayrollPopup/RequestPayrollPopup'
import { sendRequest, verifyEmail } from "../../api/RequestAPI"
import Swal from "sweetalert2"
import moment from "moment"
import * as XLSX from 'xlsx'
import { useState, useContext, useEffect } from "react";
import { PayrollContext } from "../../contexts/PayrollContext";
import { getAllPayslip } from "../../api/PayrollAPI";
import { getAllTimekeeping } from "../../api/TimekeepingAPI";






function HomePage() {
  const [triggerRequest, setTriggerRequest] = useState(false)
  const { payrollData, setPayrollData } = useContext(PayrollContext)
  const [newPayrollData, setNewPayrollData] = useState([])
  const [timekeepingData, setTimekeepingData] = useState([])

  useEffect(() => {
		handleDataChange()
	}, [JSON.stringify(payrollData), JSON.stringify(timekeepingData)])


  const navigate = useNavigate()
  const handleNavigateToLogin = () => {
    navigate('/login')
  }
  const requestPayroll = () => {
    showDialog();
  }

  const showDialog = () => {
    setTriggerRequest(true)
  }
  const handleCancel = () => {
    setTriggerRequest(false)
  }

  const getPayrollData = (month) => {
    getAllTimekeeping(month).then(response => { setTimekeepingData(response) })
    getAllPayslip(month).then(response => { setPayrollData(response) })
    
  }

  const handleDataChange = () => {
    var data = payrollData.map((item) => ({
      ...item,
      formattedSalary: new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(item.totalSalary),
    }))


    var res = data.map((itemA) => {
      const matchingItem = timekeepingData.find((itemB) => itemB.employee.id == itemA.employee.id)
      if (matchingItem) {
        // console.log("dô")
        return {
          ...itemA,
          workingDays: matchingItem.working_days,
          overtime: matchingItem.overtime,
          daysOff: matchingItem.days_off,
        };
      }
      return itemA;
    })

    setNewPayrollData(res)
  }

  function handleExport() {
    console.log(newPayrollData)
    const month = newPayrollData[1].month
    const data = [Object.keys(newPayrollData[0])];

    newPayrollData
      .forEach((d) => data.push(Object.values(d)));
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const fileData = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
    const file = new File([fileData], `Payroll of ${month} .xlsx`, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    return file
  }

  const handleSend = (email, month) => {

    // console.log(email, month)

    if (email == null || month == null || month == 'Invalid date') {
      Swal.fire({
        icon: 'error',
        title: 'Please fill out the form!',
      })
    }
    else if (!moment(month, 'YYYY-MM').isBefore(moment().format('YYYY-MM'))) {
      if (moment(month, 'YYYY-MM').isSame(moment().format('YYYY-MM'))) {
        Swal.fire({
          icon: 'error',
          title: `This month is not over yet!`,
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: `This month hasn't come yet!`,
        })
      }
    }
    else {
      verifyEmail(email)
        .then(response => {
          if (response == false) {
            Swal.fire({
              icon: 'error',
              title: 'Email not exist!',
            })
          }
          else {
            Swal.fire({
              icon: 'success',
              title: 'Successful!',
              text: 'Please wait response from your Accountant!',
              showConfirmButton: false,
              timer: 3000
            })

            getPayrollData(month)
            if (newPayrollData != [])
              sendRequest(email, handleExport())
          }
          setTriggerRequest(false)
        })
    }
  }




  return (
    <div className="containerHomePage">
      <img className="logoHomePage" src={logo} ></img>
      <div className="loginToPMSBtn" onClick={handleNavigateToLogin}>Login to PM !</div>
      <div className="requestBtn" onClick={requestPayroll}>Request payroll</div>
      <RequestPayrollPopup isOpen={triggerRequest} handleCancel={handleCancel} handleSend={handleSend} />
    </div>

  )
}

export default HomePage
