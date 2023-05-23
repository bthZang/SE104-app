
import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./Employee.scss"

const employeeData = [
    {id: '#00001', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
    {id: '#00002', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
    {id: '#00003', name: 'Example', gender: 'Female' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
    {id: '#00004', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
    {id: '#00005', name: 'Example', gender: 'Female' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
    {id: '#00006', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
    {id: '#00007', name: 'Example', gender: 'Female' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
    {id: '#00008', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
    {id: '#00009', name: 'Example', gender: 'Male' ,birthdate: '06/05/2002', department: 'unknown', position:'unknown' },
   

]

const columns = [

    {
        name: 'ID',
        selector: 'id',
        sortable: true,
        
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        
    },
    {
        name: 'Gender',
        selector: 'gender',
        sortable: true,
    },
    {
        name: 'Birthdate',
        selector: 'birthdate',
        sortable: true,
    },
    {
        name: 'Department',
        selector: 'department',
        sortable: true,
    },
    {
        name: 'Position',
        selector: 'position',
        sortable: true,
    }
]

const Employee = () => {


    return(

        <div className="container">
            <div>
                <TitleHome children={"Employee"}></TitleHome>
                <div className="account">
                    <DataTable
                        columns={columns}
                        data={employeeData}
                        pagination={true}
                        highlightOnHover={true}
                        striped={true}
                    ></DataTable>
                </div>
            </div>
        </div>
      
        
    );

}

export default Employee;