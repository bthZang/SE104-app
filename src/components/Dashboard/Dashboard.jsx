import "./Dashboard.scss";
import * as XLSX from 'xlsx';

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";
import DataTable from "react-data-table-component";

import TitleHome from "../titleHome/titleHome";
import Search from "../search/search";
import CustomButton from "../CustomButton/CustomButton";



const Dashboard = ({ onClick, data}) => {

	return (
		<div className="containerDashboard">
			<TitleHome showSearch ={false} children={"Dashboard"} data={data}></TitleHome>
		</div>
	);
};

export default Dashboard;
