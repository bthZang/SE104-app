import "./HomePage.scss"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { useState } from "react";
import RequestPayrollPopup from '../../components/RequestPayrollPopup/RequestPayrollPopup'


function HomePage() {
  const [trigger, setTrigger] = useState(false);

  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    navigate('/login');
  }
  const requestPayroll = () => {
    showDialog();
  }

  const showDialog = () => {
    setTrigger(true);
  }
  const handleCancel = () => {
    setTrigger(false);
  }
  return (
    <div className="containerHomePage">
      <img className="logoHomePage" src={logo} ></img>
      <div className="loginToPMSBtn" onClick={handleNavigateToLogin}>Login to PM !</div>
      <div className="requestBtn" onClick={requestPayroll}>Request payroll</div>
      <RequestPayrollPopup isOpen={trigger} handleCancel={handleCancel} />
    </div>

  )
}

export default HomePage;
