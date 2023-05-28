import DataTable from "react-data-table-component";
import { useState } from "react";

import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";

import "./Request.scss";

const requestData = [
	{
		name: "Example",
		timestamp: "HR",
		month: "HR",
		message: "HR",
		button: <CustomButton type={"short"} children={"Send"}></CustomButton>,
	},
	{
		name: "Example",
		timestamp: "Accounting",
		month: "HR",
		message: "HR",
		button: <CustomButton type={"short"} children={"Send"}></CustomButton>,
	},
	{
		name: "Example",
		timestamp: "BOD",
		month: "HR",
		message: "HR",
		button: <CustomButton type={"short"} children={"Send"}></CustomButton>,
	},
	{
		name: "Example",
		timestamp: "None",
		month: "HR",
		message: "HR",
		button: <CustomButton type={"short"} children={"Send"}></CustomButton>,
	},
];

const columns = [
	{
		name: "Name",
		selector: "name",
		sortable: true,
		width: "270px",
		style: {
			justifyContent: "left",
		},
	},
	{
		name: "Timestamp",
		selector: "timestamp",
		sortable: true,
		width: "287px",
		style: {
			justifyContent: "left",
		},
	},
	{
		name: "Month",
		selector: "month",
		sortable: true,
		width: "180px",
		style: {
			justifyContent: "left",
		},
	},
	{
		name: "Message",
		selector: "message",
		sortable: true,
		width: "400px",
		style: {
			justifyContent: "left",
		},
	},
	{
		name: "",
		selector: "button",
		sortable: true,
		width: "200px",
		style: {
			justifyContent: "center",
		},
	},
];

const Request = () => {
	const [identifyRequest, setIdentifyRequest] = useState("");

	const newRequestData = requestData.map((data) => ({
		...data,
		payslip: (
			<CustomButton
				onClick={() => {
					setIdentifyRequest(data.name);
				}}
				type={"short"}
			>
				Send
			</CustomButton>
		),
	}));

	return (
		<div className="containerRequest">
			<TitleHome children={"Request"}></TitleHome>
			<div className="account">
				<p className="titleTable">{`You have ${requestData.length} pending request`}</p>
				<DataTable
					columns={columns}
					data={requestData}
					pagination={true}
					highlightOnHover={true}
					striped={true}
				></DataTable>
			</div>
		</div>
	);
};

export default Request;
