import "./Payroll.scss"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { useState } from "react";
import DataTable from "react-data-table-component";

import TitleHome from "../titleHome/titleHome";
import Search from "../search/search";
import CustomButton from "../CustomButton/CustomButton";
const options =['Jan-2023', 'Feb-2023', 'Mar-2023', 'Apr-2023', 'May-2023', 'June-2023', 'July-2023', 'Aug-2023', 'Sep-2023', 'Oct-2023','Nov-2023', 'Dec-2023']

const payrollData = [
    {id: '#00001', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00002', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00003', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00004', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00005', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00006', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00007', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00008', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00009', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    {id: '#00010', name: 'Example', workingDays: 'Accounting',overTime: 'Accounting', netSalary: 'P' , payslip:  <CustomButton children={"Export"} type={"short"}></CustomButton>},
    
   

]

const columns = [

    {
        name: 'ID',
        selector: 'id',
        sortable: true,
        style: {
            // background: "orange",
            //maxWidth : "6px",
            //minWidth : "0px",
            justifyContent : "left",
          },
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        style: {
            // background: "orange",
            width : "329px",
            justifyContent : "left",
          },
    },
    {
        name: 'Working days',
        selector: 'workingDays',
        sortable: true,
        style: {
            // background: "orange",
            justifyContent : "center",
          },
    },
    {
        name: 'Over time',
        selector: 'overTime',
        sortable: true,
        style: {
            // background: "orange",
            justifyContent : "center",
          },
    },
    {
        name: 'Net salary',
        selector: 'netSalary',
        sortable: true,
        style: {
            // background: "orange",
            justifyContent : "center",
          },
    },
    {
        name: 'Payslip',
        selector: 'payslip',
        sortable: true,
        style: {
            // background: "orange",
            justifyContent : "center",
          },
          
    },
    
]


export default function Payroll () {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return(
        <div className="containerPayroll">
             <TitleHome children={"Payroll"}></TitleHome>

            <div className="topTable">
                <Dropdown 
                    width={400} 
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                    placeholder="Slect a month"
                    className="customDropdown"
                ></Dropdown>
                <CustomButton children={"Export all"} type={"normal"}></CustomButton>
            </div>
            <div className="table">
                <DataTable
                    columns={columns}
                    data={payrollData}
                    pagination={true}
                    highlightOnHover={true}
                    striped={true}
                ></DataTable>
            </div>
            </div>
    );

}
