
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./AdminPage.scss"

import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import CustomButton from "../../components/CustomButton/CustomButton";
import Permission from "../../components/permission/permission";
import TitleHome from "../../components/titleHome/titleHome";
import Account from "../../components/Account/Account";
import ChangeConfirm from "../../components/ChangeConfirm/ChangeConfirm";
import Confirm from "../../components/Confirm/Confirm";


import topAdminPage from "../../assets/images/topAdminPage.png"

const humanRescourceData = [
  { email: 'example@email', name: 'Example', }
]
const AcountingData = [
  { email: 'example@email', name: 'Example', }
]
const BoardData = [
  { email: 'example@email', name: 'Example', }
]


const accountData = [
  { email: 'example@email', name: 'Example', permission: 'HR', },
  { email: 'example@email', name: 'Example', permission: 'Accounting', },
  { email: 'example@email', name: 'Example', permission: 'BOD', },
  { email: 'example@email', name: 'Example', permission: 'None', },

]


function AdminPage() {

  const [tab, setTab] = useState('permission');
  const handleChange = (status) => {
    setTab(status);
  };

  const [dialogType, setDialogType] = useState('');
  const [email, setEmail] = useState('');

  const handleOnClick = (type, email) => {
    setEmail(email);
    setDialogType(type)
  };

  const newHumanRescourceData = humanRescourceData.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('change', data.email);
        }}
        type={"short"}
      >
        Change
      </CustomButton>
    ),
  }));

  const newBoardData = BoardData.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('change', data.email);
        }}
        type={"short"}
      >
        Change
      </CustomButton>
    ),
  }));

  const newAcountingData = AcountingData.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('change', data.email);
        }}
        type={"short"}
      >
        Change
      </CustomButton>
    ),
  }));


  const newAccountData = accountData.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('delete', data.email);
        }}
        type={"short"}
      >
        Delete
      </CustomButton>
    ),
  }));

  // const options = [
  //   "HR Deparment",
  //   "Accounting Deparment",
  //   "Boar of Director",
  //   "None Access",
  // ];

  return (
    <div className="containerAdminPage">
      <div className="adminSideBar">
        <AdminSideBar handleChange={handleChange}></AdminSideBar>
      </div>
      <div className="content" >
        {tab == "permission" && <Permission newAcountingData={newAcountingData} newBoardData={newBoardData} newHumanRescourceData={newHumanRescourceData} humanRescourceData={humanRescourceData} BoardData={BoardData} AcountingData={AcountingData}></Permission>}
        {tab == "account" && <Account newAccountData={newAccountData} accountData={accountData}></Account>}

        <div className="confirmBox">
          {dialogType == "change" && <ChangeConfirm onClose={() => setDialogType('')}
            onClick={onclick}
          >{"Change"}</ChangeConfirm>}
          {dialogType == "delete" && <Confirm  text={"account?"} onClose={() => setDialogType('')}
            onClick={onclick}
          >{"Delete"}</Confirm>}
          
        </div>
      </div>
    </div>

  )
}

export default AdminPage;
