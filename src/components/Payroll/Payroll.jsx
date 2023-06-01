import "./Payroll.scss";
import * as XLSX from 'xlsx';

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";
import DataTable from "react-data-table-component";

import TitleHome from "../titleHome/titleHome";
import Search from "../search/search";
import CustomButton from "../CustomButton/CustomButton";
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

const columns = [
	{
		name: "ID",
		selector: "id",
		sortable: true,
		width: "186px",
		style: {
			justifyContent: "left",
		},
	},
	{
		name: "Name",
		selector: "name",
		sortable: true,
		width: "329px",

		style: {
			// background: "orange",
			width: "329px",
			justifyContent: "left",
		},
	},
	{
		name: "Working days",
		selector: "workingDays",
		sortable: true,
		width: "270px",
		style: {
			// background: "orange",
			justifyContent: "left",
		},
	},
	{
		name: "Over time",
		selector: "overTime",
		sortable: true,
		width: "270px",

		style: {
			// background: "orange",
			justifyContent: "left",
		},
	},
	{
		name: "Net salary",
		selector: "netSalary",
		width: "270px",

		sortable: true,
		style: {
			// background: "orange",
			justifyContent: "left",
		},
	},
	{
		name: "Payslip",
		selector: "payslip",
		sortable: true,
		center: true,
		style: {
			// background: "orange",
			justifyContent: "center",
		},
	},
];


const Payroll = ({ onClick, payrollData, newPayrollData }) => {

	const [selectedOption, setSelectedOption] = useState(null);
	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);
	};


	return (
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
				<CustomButton
					onClick={() => onClick('exportAll', 0)}
					children={"Export all"}
					type={"normal"}
				></CustomButton>
			</div>
			<div className="table">
				<DataTable
					columns={columns}
					data={newPayrollData}
					pagination={true}
					highlightOnHover={true}
					striped={true}
				></DataTable>
			</div>
		</div>
	);
};

export default Payroll;
