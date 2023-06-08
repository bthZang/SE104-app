
import DataTable from "react-data-table-component";
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./Employee.scss"

import Profile from "../Profile/Profile";

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
        width: '303px'
    },
    {
        name: 'Gender',
        selector: 'gender',
        sortable: true,
    },
    {
        name: 'Birthplace',
        selector: 'birthplace',
        sortable: true,
    },
    {
        name: 'Ethnicity',
        selector: 'ethnicity',
        sortable: true,
    },
    {
        name: 'Citizen Id',
        selector: 'citizenId',
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

const Employee = ({ employeeData, onClick }) => {
    const [selectedId, setSelectedId] = useState(null);


    return (

        <div className="containerEmployee">
            <div>
                <TitleHome children={"Employee"} data={employeeData}></TitleHome>
                <div className="employee">
                    <DataTable
                        columns={columns}
                        data={employeeData}
                        pagination={true}
                        highlightOnHover={true}
                        striped={true}
                        onRowClicked={(row) => {
                            setSelectedId(row.id);
                            onClick(row.id);
                        }}
                    ></DataTable>
                    {selectedId !== null && <Profile id={selectedId} data={employeeData.find(d => d.id == selectedId)} onClose={() => setSelectedId(null)}></Profile>}

                    {/* {selectedId !== null && <YourComponent id={selectedId} />} */}
                </div>
            </div>
        </div>


    );

}

export default Employee;