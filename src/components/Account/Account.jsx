import { useState, useRef } from "react";
import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import AddConfirm from "../AddConfirm/AddConfirm";
//import {TextField} from 'react-text-field'

// import { TextField } from "@mui/material";

import "./Account.scss"


const columns = [

    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Permission',
        selector: 'userRole',
        sortable: true,
    },
    {
        name: '',
        selector: 'button',
        sortable: true,
        style: {
            justifyContent: 'center'
        }
    }
]

const Account = ({ accountData, newAccountData, onClick, onClose }) => {

    const [click, setClick] = useState(null)

    const btnAddRef = useRef(null)

    const handleOnClick = () => {
        setClick(btnAddRef.current.id)
    };

    return (

        <div className="containerAccount">
            <div>
                <TitleHome children={"Account"}></TitleHome>
                <div className="account">
                    <p className="titleTable">Account</p>
                    <DataTable
                        columns={columns}
                        data={newAccountData}
                        pagination={true}
                        highlightOnHover={true}
                        striped={true}
                    ></DataTable>
                <button id="btnAdd" ref={btnAddRef} className="btn" onClick={() => { handleOnClick() }}>Add new account</button>

                </div>
                <div>
                    {click == "btnAdd" && <AddConfirm text={"account?"}
                        onClick={onclick} onClose={() => setClick('')}
                    >Add</AddConfirm>}
                </div>
            </div>
        </div>
        // id="btnAdd" ref={btnAddRef} onClick={()=>{handleOnClick}}

    );

}

export default Account;