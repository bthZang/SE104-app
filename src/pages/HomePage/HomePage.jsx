import "./HomePage.scss"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { useState } from "react"
import RequestPayrollPopup from '../../components/RequestPayrollPopup/RequestPayrollPopup'
import IdentityPopUp from "../../components/IdentityPopUp/IdentityPopUp"
import { sendVerifyCode } from "../../api/RequestAPI"
import Swal from "sweetalert2"





function HomePage() {
  const [triggerRequest, setTriggerRequest] = useState(false)
  const [triggerIdentity, setTriggerIdentity] = useState(false)
  const [code, setCode] = useState(false)
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
  const handleSend = (email, message) => {
    setTriggerRequest(false)
    Swal.fire({
      icon: 'info',
      text: 'Pending',
      showConfirmButton: false,
      timer: 15000
    })
    sendVerifyCode(email)
      .then(response => {
        setTriggerIdentity(true)
        setCode(response)
      })

  }

  const handleVerify = (_code) => {
    if(_code == code)
    {
      Swal.fire({
        icon: 'success',
        text: 'Successful!',
        showConfirmButton: false,
        timer: 1500
      })
      setTriggerIdentity(false)
    }
    else{
      Swal.fire({
        icon: 'error',
        text: 'Wrong!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  return (
    <div className="containerHomePage">
      <img className="logoHomePage" src={logo} ></img>
      <div className="loginToPMSBtn" onClick={handleNavigateToLogin}>Login to PM !</div>
      <div className="requestBtn" onClick={requestPayroll}>Request payroll</div>
      <RequestPayrollPopup isOpen={triggerRequest} handleCancel={handleCancel} handleSend={handleSend} />
      <IdentityPopUp isOpen={triggerIdentity} handleCancel={() => setTriggerIdentity(false)} handleVerify={handleVerify}/>
    </div>

  )
}

export default HomePage
