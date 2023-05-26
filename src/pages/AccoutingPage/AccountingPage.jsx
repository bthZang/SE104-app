
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./AccountingPage.scss"

import SideBar from "../../components/SideBar/SideBar";
import Payroll from "../../components/payroll/payroll";
import Request from "../../components/request/request";
import Confirm from "../../components/Confirm/confirm";

function AccountingPage() {
  const [tab, setTab] = useState('payroll');
  const handleChange = (status) => {
    setTab(status);
  };

  return (
    <div className="containerAccountingPage">
        <div className="accountingSideBar">
           <SideBar handleChange={handleChange}></SideBar>
        </div>
       <div className="content" >
        {tab == "payroll" && <Payroll></Payroll>  } 
        {tab == "request" && <Request></Request>  } 
       </div>
       <Confirm></Confirm>
    </div>
   
  )
}

export default AccountingPage;
