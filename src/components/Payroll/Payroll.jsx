import "./Payroll.scss";
import * as XLSX from "xlsx";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState, useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@mui/material";
import CheckBox from "../CheckBox/CheckBox";

import TitleHome from "../titleHome/titleHome";
import Search from "../search/search";
import CustomButton from "../CustomButton/CustomButton";

import { PayrollContext } from "../../contexts/PayrollContext";

const options = [
  "Jan-2023",
  "Feb-2023",
  "Mar-2023",
  "Apr-2023",
  "May-2023",
  "June-2023",
  "July-2023",
  "Aug-2023",
  "Sep-2023",
  "Oct-2023",
  "Nov-2023",
  "Dec-2023",
];

function handleExport() {
  const data = [Object.keys(payrollData[0])];
  payrollData
    .filter((_, index) => checkList[index] == true)
    .forEach((d) => data.push(Object.values(d)));
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "Payroll data.xlsx");
}

// const columns = [
//   {
//     name: "ID",
//     selector: "id",
//     sortable: true,
//     width: "186px",
//     style: {
//       justifyContent: "left",
//     },
//   },
//   {
//     name: "Name",
//     selector: "name",
//     sortable: true,
//     width: "329px",

//     style: {
//       width: "329px",
//       justifyContent: "left",
//     },
//   },
//   {
//     name: "Working days",
//     selector: "workingDays",
//     sortable: true,
//     width: "270px",
//     style: {
//       justifyContent: "left",
//     },
//   },
//   {
//     name: "Over time",
//     selector: "overtime",
//     sortable: true,
//     width: "270px",

//     style: {
//       justifyContent: "left",
//     },
//   },
//   {
//     name: "Net Salary",
//     selector: "netSalary",
//     sortable: true,
//     center: true,
//     style: {
//       justifyContent: "center",
//     },
//   },
//   {
//     name: "Payslip",
//     selector: "payslip",
//     sortable: true,
//     center: true,
//     style: {
//       justifyContent: "center",
//     },
//   },
// ];

//mainPayroll

const Payroll = ({ onClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const { payrollData, setPayrollData } = useContext(PayrollContext);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const columns = [
    {
      name: (
        <CheckBox
          value={isCheckAll}
          onChange={(e) => setIsCheckAll(e.target.checked)}
        />
      ),
      selector: "checkbox",
      width: "60px",
    },
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Working days",
      selector: "workingDays",
      sortable: true,
      width: "303px",
    },
    {
      name: "Overtime",
      selector: "overtime",
    },
    {
      name: "Net Salary",
      selector: "netSalaryGrade",
      sortable: true,
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [newPayrollData, setNewPayrollData] = useState([]);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    setCheckList(payrollData.map(() => false));
  }, [JSON.stringify(payrollData)]);

  useEffect(() => {
    setNewPayrollData(
      payrollData.map((data, index) => ({
        ...data,
        checkbox: (
          <CheckBox
            value={checkList[index] || false}
            onChange={(e) =>
              setCheckList((prev) => {
                const newPrev = [...prev];
                newPrev[index] = e.target.checked;
                return newPrev;
              })
            }
          />
        ),
      }))
    );
  }, [JSON.stringify(payrollData), JSON.stringify(checkList)]);

  useEffect(() => {
    setCheckList(payrollData.map(() => isCheckAll));
  }, [isCheckAll]);

  function handleExport() {
    const data = [Object.keys(payrollData[0])];
    payrollData
      .filter((_, index) => checkList[index] == true)
      .forEach((d) => data.push(Object.values(d)));
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "Payroll data.xlsx");
  }

  return (
    <div className="containerPayroll">
      <div class="titleTable">
        
        <TitleHome children={"Payroll"} data={payrollData} showSearch={false}></TitleHome>
        <div className="tools">
          <Dropdown
            // width={900}
            options={options}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Select a month"
            className="customDropdown"
          ></Dropdown>
          <Button
            onClick={handleExport}
            variant="outlined"
            color="info"
            disabled={false}
          >
            Export
          </Button>
          <div className="search">
            <Search onSearch={setSearchKeyword} />
          </div>
        </div>
      </div>
      <div className="payroll">
        <DataTable
          columns={columns}
          data={newPayrollData.filter((d) =>
            d.name.toLowerCase().includes(searchKeyword)
          )}
          pagination={true}
          highlightOnHover={true}
          striped={true}
        ></DataTable>
      </div>
    </div>
  );
};

export default Payroll;
