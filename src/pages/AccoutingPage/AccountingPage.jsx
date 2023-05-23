
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./AccountingPage.scss"

import SideBar from "../../components/SideBar/SideBar";
import Payroll from "../../components/payroll/payroll";
import Request from "../../components/request/request";

function AccountingPage() {
  const [tab, setTab] = useState('payroll');
  const handleChange = (status) => {
    setTab(status);
  };

  return (
    <div className="container">
        <div className="accountingSideBar">
           <SideBar handleChange={handleChange}></SideBar>
        </div>
       <div className="content" >
        {tab == "payroll" && <Payroll></Payroll>  } 
        {tab == "request" && <Request></Request>  } 
       </div>
    </div>
   
  )
}

export default AccountingPage;
