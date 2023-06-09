
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from 'xlsx';
import TitleHome from "../titleHome/titleHome";

import { Button } from "@mui/material";
import CheckBox from "../CheckBox/CheckBox";
import Profile from "../Profile/Profile";
import "./Employee.scss";


const Employee = ({ employeeData, setEmployeeData, onClick }) => {
    const [isCheckAll, setIsCheckAll] = useState(false)
    const columns = [
        {
            name: <CheckBox value={isCheckAll} onChange={e => setIsCheckAll(e.target.checked)} />,
            selector: 'checkbox',
            width: '60px',
        },
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
    const [selectedId, setSelectedId] = useState(null);

    const [newEmployeeData, setNewEmployeeData] = useState([])
    const [checkList, setCheckList] = useState([])

    useEffect(() => {
        setCheckList(employeeData.map(_ => false))
    }, [JSON.stringify(employeeData)])

    useEffect(() => {
        setNewEmployeeData(employeeData.map((data, index) => ({
            ...data,
            checkbox: (
                <CheckBox value={checkList[index] || false} onChange={(e) => setCheckList(prev => {
                    const newPrev = [...prev]
                    newPrev[index] = e.target.checked
                    return newPrev
                })} />
            ),
        })))
        console.log({ checkList })
    }, [JSON.stringify(employeeData), JSON.stringify(checkList)])

    useEffect(() => {
        setCheckList(employeeData.map(_ => isCheckAll))
    }, [isCheckAll])

    function handleDeleteItem() {
        const idList = employeeData.filter((_, index) => checkList[index] == true).map(v => v.id)
        setEmployeeData([...employeeData.filter(item => !idList.includes(item.id))])
    }

    function handleExport() {
        const columnList = columns.map(v => v.name)
        const columnSelector = columns.map(v => v.selector)
        const data = [columnList];
        employeeData.filter((_, index) => checkList[index] == true).forEach(d => data.push(columnSelector.map(v => d[v]))
        );
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'Employee data.xlsx');
    }

    return (

        <div className="containerEmployee">
            <div>
                <TitleHome children={"Employee"} data={employeeData}></TitleHome>
                <div className="employee">
                    <div className="tools">
                        <Button onClick={handleDeleteItem} variant="outlined" color="error" disabled={checkList.every(v => v == false)}>Delete</Button>
                        <Button onClick={handleExport} variant="outlined" color="info" disabled={checkList.every(v => v == false)}>Export data</Button>
                    </div>
                    <DataTable
                        columns={columns}
                        data={newEmployeeData}
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