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

  const [dialogType, setDialogType] = useState('');
  const [id, setId] = useState('');

  const handleOnClick = (type, id) => {
    setId(id);
    setDialogType(type)
  };

  return (
    <div className="containerAccountingPage">
      <div className="accountingSideBar">
        <SideBar handleChange={handleChange}></SideBar>
      </div>
      <div className="content" >
        {tab == "payroll" && <Payroll onClick={handleOnClick} />}
        {tab == "request" && <Request></Request>}

        <div className="confirmBox">
          {dialogType == "export" && <Confirm onClose={() => setDialogType('')}>{"Export"}</Confirm>}
        </div>
      </div>

    </div>

  )
}

export default AccountingPage;