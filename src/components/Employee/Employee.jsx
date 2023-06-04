
import DataTable from "react-data-table-component";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./Employee.scss"



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

const Employee = ({employeeData}) => {


    return(

        <div className="containerEmployee">
            <div>
                <TitleHome children={"Employee"}></TitleHome>
                <div className="employee">
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