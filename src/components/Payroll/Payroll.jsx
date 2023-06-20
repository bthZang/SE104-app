import "./Payroll.scss";
import * as XLSX from 'xlsx';

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState, useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@mui/material";

import TitleHome from "../titleHome/titleHome";
import Search from "../search/search";
import CustomButton from "../CustomButton/CustomButton";

import { PayrollContext } from "../../contexts/PayrollContext";
import { getAllPayslip } from "../../api/PayrollAPI";
import { getAllTimekeeping } from "../../api/TimekeepingAPI";
import moment from "moment/moment";
import { DatePicker } from "antd";
import IndividualTableContent from "../IndividualTableContent/IndividualTableContent";
import Profile from "../Profile/Profile";






const Payroll = ({ onClick }) => {


	const columns = [
		{
			name: "Name",
			selector: "employee.name",
			sortable: true,
			width: "303px",
		},
		{
			name: "Working days",
			selector: "workingDays",
			sortable: true,
			width: "180px",
			style: {
				justifyContent: "center"
			},
		},
		{
			name: "Overtime",
			selector: "overtime",
			sortable: true,
			width: "150px",
			style: {
				justifyContent: "center"
			},
		},
		{
			name: "Days off",
			selector: "daysOff",
			sortable: true,
			style: {
				justifyContent: "center"
			},
		},
		{
			name: "Salary",
			selector: "formattedSalary",
			sortable: true,
			width: "180px",
			style: {
				justifyContent: "right"
			},
		},

	]

	const { payrollData, setPayrollData } = useContext(PayrollContext)

	const [selectedId, setSelectedId] = useState(null)
	const [searchKeyword, setSearchKeyword] = useState("")
	const [newPayrollData, setNewPayrollData] = useState([])
	const [timekeepingData, setTimekeepingData] = useState([])
	const [selectedDate, setSelectedDate] = useState('2023-04')

	useEffect(() => {
		handleDataChange()
	}, [JSON.stringify(payrollData), JSON.stringify(timekeepingData)])

	useEffect(() => {
		if (selectedDate != 'Invalid date') {
			// console.log("dô, month=", selectedDate)
			getAllTimekeeping(selectedDate).then(response => { setTimekeepingData(response) })
			getAllPayslip(selectedDate).then(response => { setPayrollData(response) })

		}
	}, [selectedDate])


	const handleDataChange = () => {


		var data = payrollData.map((item) => ({
			...item,
			formattedSalary: new Intl.NumberFormat('vi-VN', {
				style: 'currency',
				currency: 'VND',
			}).format(item.totalSalary),
		}))


		var res = data.map((itemA) => {
			const matchingItem = timekeepingData.find((itemB) => itemB.employee.id == itemA.employee.id)
			if (matchingItem) {
				console.log("dô")
				return {
					...itemA,
					workingDays: matchingItem.working_days,
					overtime: matchingItem.overtime,
					daysOff: matchingItem.days_off,
				};
			}
			return itemA;
		})

		setNewPayrollData(res)

		console.log(res)
	}

	// const setSearchKeyword = () =>{}

	const handleDateChange = (date, dateString) => {
		const formattedDate = moment(dateString).format('YYYY-MM');
		setSelectedDate(formattedDate);
	}

	function handleExport() {
		const month = newPayrollData[1].month
		const data = [Object.keys(newPayrollData[0])];
		
		newPayrollData
			.forEach((d) => data.push(Object.values(d)));
		const workbook = XLSX.utils.book_new();
		const worksheet = XLSX.utils.aoa_to_sheet(data);
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
		XLSX.writeFile(workbook, `Payroll of ${month} .xlsx`);
	}


	return (
		<div className="containerPayroll">
			<TitleHome children={"Payroll"} onChangeSearch={setSearchKeyword}></TitleHome>
			<div className="payroll">
				<div className="tools">
					<Button
						onClick={handleExport}
						variant="outlined"
						color="info"
					>
						Export data
					</Button>
					<DatePicker defaultValue={moment(selectedDate, 'YYYY-MM')} picker="month" format="YYYY-MM" onChange={handleDateChange} />
				</div>
				<DataTable
					columns={columns}
					data={newPayrollData.filter((d) =>
						d.employee.name.toLowerCase().includes(searchKeyword)
					)}
					pagination={true}
					highlightOnHover={true}
					striped={true}
					onRowClicked={(row) => {
						setSelectedId(row.id);
						onClick(row.id);
					}}
				></DataTable>
				{selectedId !== null && (
					<IndividualTableContent
						id={selectedId}
						data={newPayrollData.find((d) => d.id == selectedId)}
						name = {newPayrollData.find((d) => d.id == selectedId).employee.name}
						onClose={() => setSelectedId(null)}
					></IndividualTableContent>
					
				)}

			</div>
		</div>
	);
};

export default Payroll
