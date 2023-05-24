
import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./Account.scss"

const accountData = [
    {email: 'example@email', name: 'Example', permission: 'HR' ,button: <CustomButton type={'short'} children={'Delete'} ></CustomButton>},
    {email: 'example@email', name: 'Example', permission: 'Accounting' ,button: <CustomButton type={'short'} children={'Delete'} ></CustomButton>},
    {email: 'example@email', name: 'Example', permission: 'BOD' ,button: <CustomButton type={'short'} children={'Delete'} ></CustomButton>},
    {email: 'example@email', name: 'Example', permission: 'None' ,button: <CustomButton type={'short'} children={'Delete'} ></CustomButton>},

]

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
        selector: 'permission',
        sortable: true,
    },
    {
        name: '',
        selector: 'button',
        sortable: true,
    }
]

const Account = () => {


    return(

        <div className="containerAccount">
            <div>
                <TitleHome children={"Account"}></TitleHome>
                <div className="account">
                    <p className="titleTable">Acount</p>
                    <DataTable
                        columns={columns}
                        data={accountData}
                        pagination={true}
                        highlightOnHover={true}
                        striped={true}
                    ></DataTable>
                </div>
                <button className="btn">Add new account</button>
                
            </div>
        </div>
      
        
    );

}

export default Account;