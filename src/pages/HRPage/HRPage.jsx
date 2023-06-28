import { useEffect, useRef, useState, useContext } from "react";
import "./HRPage.scss";

import axios from "axios";
import ChartTimekeeping from "../../components/ChartTimekeeping/ChartTimekeeping";

import Confirm from "../../components/Confirm/Confirm";
import CustomButton from "../../components/CustomButton/CustomButton";
import Employee from "../../components/Employee/Employee";
import HRSideBar from "../../components/HRSideBar/HRSideBar";
import Candidate from "../../components/Candidate/Candidate";
import Dashboard from "../../components/dashboard/dashboard";
import DayTimeKeeping from "../../components/dayTimeKeeping/dayTimeKeeping";
import MonthTimeKeeping from "../../components/monthTimeKeeping/monthTimeKeeping";
import TitleHome from "../../components/titleHome/titleHome";
import { CANDIDATE_API } from "../../constant/apiURL";
import Payroll from "../../components/payroll/payroll";
import { MonthTimekeepingContext } from "../../contexts/MonthTimekeepingContext";
import { getAllDailyTkByEmployeeAndMonth } from "../../api/DailyTkAPI";
import moment from "moment";
import { getAllTimekeeping } from "../../api/TimekeepingAPI";



const dayTimeKeepingDataDeafault = [
	{
		id: "1",
		name: "Khai Ngo",
		department: "Accounting",
		position: "P",
		in: "D",
		out: "P",
	},
	{
		id: "3",
		name: "Giang Bui",
		department: "Technical",
		position: "P",
		in: "D",
		out: "P",
	},
	{
		id: "4",
		name: "Hy Nguyen",
		department: "Accounting",
		position: "P",
		in: "D",
		out: "P",
	},
	{
		id: "5",
		name: "Duy Nguyen",
		department: "Accounting",
		position: "P",
		in: "D",
		out: "P",
	},
	{
		id: "6",
		name: "Khang Nguyen",
		department: "Technical",
		position: "P",
		in: "D",
		out: "P",
	},
	{
		id: "7",
		name: "Da Nguyen",
		department: "Accounting",
		position: "P",
		in: "D",
		out: "P",
	},
];


let data = "Zangggg";

function HRPage() {
	const [tab, setTab] = useState("timekeeping");
	const handleChange = (status) => {
		setTab(status);
	};

	const [candidateData, setCandidateData] = useState([]);
	const { monthTimekeepingData, setMonthTimekeepingData } = useContext(MonthTimekeepingContext)


	// useEffect(() => {
	// 	(async () => {
	// 		const response = await axios.get(`${CANDIDATE_API}/all`, {
	// 			headers: {
	// 				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
	// 			},
	// 		});
	// 		setCandidateData(response.data);
	// 	})();
	// }, []);

	const [clickPosition, setClickPosition] = useState({
		x: 0,
		y: 0,
		onChange: () => { },
		isClick: false,
	});
	const [dayTimeKeepingData, setDayTimeKeepingData] = useState(
		dayTimeKeepingDataDeafault.map((d) => ({
			...d,
			position: "Developer",
			in: new Date().toDateString(),
			out: new Date().toDateString(),
		}))
	);
	const handleChangeFunction = (d, index, key) => (state) => {
		setMonthTimekeepingData((prev) => {
			d = prev[index];
			const newData = [...prev.map((d) => ({ ...d }))];
			const keys = Object.keys(d);
			let P = 0;
			let D = 0;
			let T = 0;
			keys.forEach((key_) => {
				console.log({ key: d[key_] });
				if (key_ != key) {
					if (d[key_]?.props?.children == "P" || d[key_] == "P") P += 1;
					if (d[key_]?.props?.children == "D" || d[key_] == "D") D += 1;
					if (d[key_]?.props?.children == "T" || d[key_] == "T") T += 1;
				} else {
					if (state == "P") P += 1;
					if (state == "D") D += 1;
					if (state == "T") T += 1;
					if (d[key_]?.props?.children == "P" || d[key_] == "P") P -= 1;
					if (d[key_]?.props?.children == "D" || d[key_] == "D") D -= 1;
					if (d[key_]?.props?.children == "T" || d[key_] == "T") T -= 1;
				}
			});
			newData[index].dayOff = P;
			newData[index].workingDays = D;
			newData[index].overtime = T;
			newData[index][key] = (
				<CustomButton
					style={{ margin: 3, color: "white", width: 45 }}
					type={"short"}
					onClick={(e) => {
						setClickPosition({
							x: e.clientX,
							y: e.clientY,
							onChange: handleChangeFunction(d, index, key),
							isClick: true,
						});
					}}
				>
					{state}
				</CustomButton>
			);
			return newData;
		});
	};


	const [tabTimekeeping, setTabTimekepping] = useState("dayTimekeeping");

	const [tabTimekeepingBtn, setTabTimekeppingBtn] = useState("day");
	const handleChangeTabTimekeeping = (statusRef) => {
		setTabTimekeppingBtn(statusRef.current.id);
		//setTabTimekepping(statusRef)
	};

	const dayRef = useRef(null);
	const monthRef = useRef(null);
	const chartRef = useRef(null);

	const [searchValue, setSearchValue] = useState("");

	const [id, setId] = useState(null);
	const handleOnClickID = (_id) => {
		setId(_id);
	};

	const [dialogType, setDialogType] = useState("");
	const [email, setEmail] = useState("");

	const handleOnClick = (type, email) => {
		setEmail(email);
		setDialogType(type);
	};

	///month

	const [selectedDate, setSelectedDate] = useState('2023-04')
	const [isLoading, setIsLoading] = useState(true)
	const [columns, setColumns] = useState([])
	const [isChanged, setIsChanged] = useState(false)
	const [newTimekeepingData, setNewTimekeepingData] = useState([])

	useEffect(() => {
		if (selectedDate != 'Invalid date' && isChanged == true) {
			setIsLoading(true)
			// console.log("call")
			getAllTimekeeping(selectedDate).then(response => {
				if (response.length == 0 && monthTimekeepingData.length == 0) {
					setIsLoading(false)
				}
				setMonthTimekeepingData(response)
			})
		}
		else
			if (selectedDate != 'Invalid date' && isChanged == false && monthTimekeepingData.length) {
				// console.log("call 2")
				handleDataChange()
			}
			else
				if (selectedDate != 'Invalid date' && isChanged == false) {
					// console.log("call 3")
					getAllTimekeeping(selectedDate).then(response => {
						setMonthTimekeepingData(response)
					})
				}
	}, [selectedDate])



	useEffect(() => {
		if (monthTimekeepingData.length || isChanged == false) {
			// console.log("chang 1")
			handleDataChange()
		}
		else
			if (!monthTimekeepingData.length) {
				// console.log("hello from lenght = 0", selectedDate)
				setNewTimekeepingData([])
				setIsLoading(false)
			}
	}, [JSON.stringify(monthTimekeepingData)])




	function getDaysInMonth(_month) {
		// Tạo một đối tượng Date với ngày là 0 (ngày cuối của tháng trước)
		const [year, month] = _month.split('-')
		const date = new Date(year, month, 0);

		// Trả về ngày cuối cùng của tháng
		return date.getDate();
	}

	const handleDataChange = async () => {

		const daysInMonth = getDaysInMonth(selectedDate)

		var tmpCol = [
			{
				name: "Name",
				selector: "employee.name",
				sortable: true,
				width: "303px",
			},


		]
		for (let i = 1; i <= daysInMonth; i++) {
			tmpCol.push({
				name: i,
				selector: `days[${i - 1}].type`,
				sortable: true,
				width: "60px",
				minWidth: "50px",
				maxWidth: "50px",
			});
		}

		tmpCol = [...tmpCol,
		{
			name: "Working days",
			selector: "working_days",
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
			// width: "150px",
			style: {
				justifyContent: "center"
			},
		},
		{
			name: "Days off",
			selector: "days_off",
			sortable: true,
			style: {
				justifyContent: "center"
			},
		},
		{
			name: "Total",
			selector: "total",
			sortable: true,
			style: {
				justifyContent: "center"
			},
		}
		]

		setColumns(tmpCol)

		var res = await Promise.all(monthTimekeepingData.map(async (itemA) => {
			const dailyTk = await getAllDailyTkByEmployeeAndMonth(itemA.employee.id, itemA.month)
			const newDailyTk = []

			for (let i = 1; i <= daysInMonth; i++) {
				newDailyTk.push({
					day: i,
					type: 'P'
				});
			}

			for (let i = 0; i < dailyTk.length; i++) {
				const [year, month, day] = dailyTk[i].day.split('-')

				newDailyTk[Number(day) - 1]['type'] = dailyTk[i].type;
			}


			// console.log("dailyTk", dailyTk)
			// console.log("newDailyTk", newDailyTk)
			itemA.total = itemA.working_days + itemA.overtime
			// console.log(itemA.working_days)
			return await {
				...itemA,
				days: newDailyTk
			};
		}))

		if (res.length) {
			// console.log("do")
			setNewTimekeepingData(res)
			setIsChanged(true)
			setIsLoading(false)
		}


	}

	const handleDateChange = (date, dateString) => {
		console.log("date change", dateString)
		const formattedDate = moment(dateString).format("YYYY-MM");
		setSelectedDate(formattedDate);
	};

	return (
		<div className="containerHRPage">
			{clickPosition.isClick && (
				<div
					style={{
						top: clickPosition.y,
						left: clickPosition.x,
					}}
					className="popup"
				>
					<button
						onClick={() => {
							setClickPosition((prev) => ({ ...prev, isClick: false }));
							clickPosition.onChange("D");
						}}
					>
						Work
					</button>
					<button
						onClick={() => {
							setClickPosition((prev) => ({ ...prev, isClick: false }));
							clickPosition.onChange("P");
						}}
					>
						Not work
					</button>
					<button
						onClick={() => {
							setClickPosition((prev) => ({ ...prev, isClick: false }));
							clickPosition.onChange("T");
						}}
					>
						Overtime
					</button>
				</div>
			)}
			<div className="HRSideBar">
				<HRSideBar handleChange={handleChange}></HRSideBar>
			</div>
			<div className="content">
				{tab == "dashboard" && <Dashboard data={data}></Dashboard>}
				{tab == "timekeeping" && (
					<div>
						<TitleHome
							onChangeSearch={setSearchValue}
							data={data}>Timekeeping</TitleHome>
						<div className="timekeepingStyle">
							<div
								id="day"
								ref={dayRef}
								className={
									tabTimekeepingBtn === "day" ? "blur" : "nonBlur"
								}
								onClick={() => {
									handleChangeTabTimekeeping(dayRef);
								}}
							>
								<p>Today</p>
							</div>
							<div
								id="month"
								ref={monthRef}
								className={
									tabTimekeepingBtn === "month" ? "blur" : "nonBlur"
								}
								onClick={() => {
									handleChangeTabTimekeeping(monthRef);
								}}
							>
								<p>Month</p>
							</div>
							<div
								id="chart"
								ref={chartRef}
								className={
									tabTimekeepingBtn === "chart" ? "blur" : "nonBlur"
								}
								onClick={() => {
									handleChangeTabTimekeeping(chartRef);
								}}
							>
								<p>Chart</p>
							</div>
						</div>
						{tabTimekeepingBtn == "day" && (
							<DayTimeKeeping
								dayTimeKeepingData={dayTimeKeepingData}
							></DayTimeKeeping>
						)}
						{tabTimekeepingBtn == "month" && (
							<MonthTimeKeeping
								monthTimekeepingData={newTimekeepingData}
								handleDateChange={handleDateChange}
								selectedDate={selectedDate}
								isLoading={isLoading}
								columns={columns}
								searchValue={searchValue}
							></MonthTimeKeeping>
						)}
						{tabTimekeepingBtn == "chart" && (
							<ChartTimekeeping
								chartTimeKeepingData={newTimekeepingData}
							></ChartTimekeeping>
						)}
					</div>
				)}
				{tab == "employee" && (
					<Employee onClick={handleOnClickID}></Employee>
				)}
				{tab == "candidate" && <Candidate />}
				{tab == "payroll" && <Payroll onClick={handleOnClickID} />}

				<div className="confirmBox">
					{dialogType == "accept" && (
						<Confirm
							text={"candidate?"}
							onClose={() => setDialogType("")}
							onClick={onclick}
						>
							{"Accept"}
						</Confirm>
					)}
					{dialogType == "reject" && (
						<Confirm
							text={"candidate?"}
							onClose={() => setDialogType("")}
							onClick={onclick}
						>
							{"Reject"}
						</Confirm>
					)}
				</div>
			</div>
		</div >
	);
}

export default HRPage;
