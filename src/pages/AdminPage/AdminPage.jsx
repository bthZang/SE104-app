
import { useNavigate, } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./AdminPage.scss"

import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import CustomButton from "../../components/CustomButton/CustomButton";
import Permission from "../../components/permission/permission";
import TitleHome from "../../components/titleHome/titleHome";
import Account from "../../components/Account/Account";
import ChangeConfirm from "../../components/ChangeConfirm/ChangeConfirm";
import Confirm from "../../components/Confirm/Confirm";


import topAdminPage from "../../assets/images/topAdminPage.png"

import { useEffect } from "react";
import { getAllUser, updateUserRole } from "../../api/AdminAPI";
import { selectAccessToken, selectAuthData, selectUserRole } from "../../app/reducer/authReducer";



function AdminPage() {

  const navigate = useNavigate()

  const userRole = useSelector(selectUserRole)

  const accessToken = useSelector(selectAccessToken)


  const [AcountingData, setAcountingData] = useState([])

  const [BoardData, setBoardData] = useState([])

  const [humanRescourceData, sethumanRescourceData] = useState([])

  const [accountData, setAccountData] = useState([])


  const callAPI = () => {
    getAllUser(accessToken, 'ACCOUNTANT')
      .then(response => {
        setAcountingData(response);
      })
    getAllUser(accessToken, 'HR')
      .then(response => {
        sethumanRescourceData(response);
      })
    getAllUser(accessToken, 'BOD')
      .then(response => {
        setBoardData(response);

      })
    getAllUser(accessToken)
      .then(response => {
        setAccountData(response)
      })
  }


  useEffect(() => {
    getAllUser(accessToken, 'ACCOUNTANT')
      .then(response => {
        setAcountingData(response);
      })
    getAllUser(accessToken, 'HR')
      .then(response => {
        sethumanRescourceData(response);
      })
    getAllUser(accessToken, 'BOD')
      .then(response => {
        setBoardData(response);

      })
    getAllUser(accessToken)
      .then(response => {
        setAccountData(response)
      })
  }, [])


  const [tab, setTab] = useState('permission');
  const handleChange = (status) => {
    setTab(status);
  };

  const [dialogType, setDialogType] = useState('');
  const [id, setId] = useState('');

  const handleOnClick = (type, id) => {
    setId(id)
    setDialogType(type)
  };

  const newHumanRescourceData = humanRescourceData?.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('change', data.id);
        }}
        type={"short"}
      >
        Change
      </CustomButton>
    ),
  }));

  const newBoardData = BoardData?.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('change', data.id);
        }}
        type={"short"}
      >
        Change
      </CustomButton>
    ),
  }));

  const newAcountingData = AcountingData?.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('change', data.id);
        }}
        type={"short"}
      >
        Change
      </CustomButton>
    ),
  }));


  const newAccountData = accountData?.map((data) => ({
    ...data,
    button: (
      <CustomButton
        onClick={() => {
          handleOnClick('delete', data.id);
        }}
        type={"short"}
      >
        Delete
      </CustomButton>
    ),
  }));

  const options = [
    "HR Deparment",
    "Accounting Deparment",
    "Boar of Director",
    "None Access",
  ];

  const handleDeleteUser = () =>{
    
  }



  return (
    <>
      {userRole == 'ADMIN' && <div className="containerAdminPage">
        <div className="adminSideBar">
          <AdminSideBar handleChange={handleChange}></AdminSideBar>
        </div>
        <div className="content" >
          {tab == "permission" && <Permission newAcountingData={newAcountingData} newBoardData={newBoardData} newHumanRescourceData={newHumanRescourceData} humanRescourceData={humanRescourceData} BoardData={BoardData} AcountingData={AcountingData}></Permission>}
          {tab == "account" && <Account newAccountData={newAccountData} accountData={accountData}></Account>}

          <div className="confirmBox">
            {dialogType == "change" && <ChangeConfirm handleChange={callAPI} options={options} onClose={() => setDialogType('')} userData={{ id: id, accessToken: accessToken }}
            >{"Change"}</ChangeConfirm>}
            {dialogType == "delete" && <Confirm text={"account?"} onClose={() => setDialogType('')}
              onClick={handleDeleteUser}
            >{"Delete"}</Confirm>}

          </div>
        </div>
      </div>}
      {userRole != 'ADMIN' && <div>You can't access this page</div>}
    </>
  )
}

export default AdminPage;
