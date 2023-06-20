import "./HomePage.scss"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { useState } from "react"
import RequestPayrollPopup from '../../components/RequestPayrollPopup/RequestPayrollPopup'
import IdentityPopUp from "../../components/IdentityPopUp/IdentityPopUp"
import { addRequest, verifyEmail } from "../../api/RequestAPI"
import Swal from "sweetalert2"





function HomePage() {
  const [triggerRequest, setTriggerRequest] = useState(false)
  const [triggerIdentity, setTriggerIdentity] = useState(false)

  // const [month, setMonth] = useState(null)
  // const [bodId, setBodId] = useState(null)
  // const [message, setMessage] = useState(null)


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
  const handleSend = async (email, message, month) => {

    if (await handleVerify(email) == false) {
      Swal.fire({
        icon: 'error',
        title: 'Email not exist!',
      })
      return
    }

    setTriggerRequest(false)
    // setMonth(month)
    // setMessage(message)
    await addRequest(email, message, month)

    Swal.fire({
      icon: 'success',
      title: 'Successful!',
      text: 'Please wait response from your Accountant!',
      showConfirmButton: false,
      timer: 3000
    })


  }


  const handleVerify = async (email) => {
    var res
    await verifyEmail(email)
      .then(response => {
        res = response
      })
    return res
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
