
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./AdminPage.scss"

import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import CustomButton from "../../components/CustomButton/CustomButton";
import Permission from "../../components/permission/permission";
import TitleHome from "../../components/titleHome/titleHome";
import Account from "../../components/Account/Account";

import topAdminPage from"../../assets/images/topAdminPage.png"

function AdminPage() {

  const [tab, setTab] = useState('permission');
  const handleChange = (status) => {
    setTab(status);
  };
  // const display = () => {
  //   if (tab == "permission") 
  //   { console.log(giaaaaamg)
  //     return <Permission></Permission>}
  //   else if (tab == "account") 
  //   return <Account></Account>
  // }

  // const component = "Permission"

  return (
    <div className="container">
        <div className="adminSideBar">
           <AdminSideBar handleChange={handleChange}></AdminSideBar>
        </div>
       <div className="content" >
        {tab == "permission" && <Permission></Permission>  } 
        {tab == "account" && <Account></Account>  } 
       </div>
    </div>
   
  )
}

export default AdminPage;
