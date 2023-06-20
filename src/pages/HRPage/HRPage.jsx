import { useEffect, useRef, useState } from "react";
import "./HRPage.scss";

import axios from "axios";
import ChartTimekeeping from "../../components/ChartTimekeeping/ChartTimekeeping";
import Confirm from "../../components/Confirm/Confirm";
import CustomButton from "../../components/CustomButton/CustomButton";
import Employee from "../../components/Employee/Employee";
import HRSideBar from "../../components/HRSideBar/HRSideBar";
import Candidate from "../../components/candidate/candidate";
import Dashboard from "../../components/dashboard/dashboard";
import DayTimeKeeping from "../../components/dayTimeKeeping/dayTimeKeeping";
import MonthTimeKeeping from "../../components/monthTimeKeeping/monthTimeKeeping";
import TitleHome from "../../components/titleHome/titleHome";
import { CANDIDATE_API } from "../../constant/apiURL";
import Payroll from "../../components/payroll/payroll";

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

const monthTimeKeepingDataDefault = [
	{
		id: "1",
		name: "Khai Ngo",
		one: "D",
		two: "P",
		three: "D",
		four: "P",
		five: "D",
		six: "P",
		seven: "P",
		eight: "P",
		nine: "P",
		ten: "P",
		eleven: "P",
		twelve: "P",
		thirteen: "P",
		fourteen: "P",
		fifteen: "P",
		sixteen: "P",
		seventeen: "P",
		eighteen: "P",
		nineteen: "T",
		twenty: "P",
		thirty: "P",
		twentyNine: "P",
		twentyEight: "P",
		twentySeven: "P",
		twentySix: "P",
		twentyFive: "P",
		twentyFour: "P",
		twentyThree: "P",
		twentyTwo: "P",
		twentyOne: "P",
		workingDays: "3",
		dayOff: "25",
		overtime: "1",
		total: "30",
	},
	{
		id: "3",
		name: "Giang Bui",
		one: "D",
		two: "P",
		three: "D",
		four: "P",
		five: "D",
		six: "P",
		seven: "P",
		eight: "P",
		nine: "P",
		ten: "P",
		eleven: "P",
		twelve: "P",
		thirteen: "P",
		fourteen: "P",
		fifteen: "P",
		sixteen: "P",
		seventeen: "P",
		eighteen: "P",
		nineteen: "T",
		twenty: "P",
		thirty: "P",
		twentyNine: "P",
		twentyEight: "P",
		twentySeven: "P",
		twentySix: "P",
		twentyFive: "P",
		twentyFour: "P",
		twentyThree: "P",
		twentyTwo: "P",
		twentyOne: "P",
		workingDays: "3",
		dayOff: "25",
		overtime: "1",
		total: "30",
	},
	{
		id: "4",
		name: "Hy Nguyen",
		one: "D",
		two: "P",
		three: "D",
		four: "P",
		five: "D",
		six: "P",
		seven: "P",
		eight: "P",
		nine: "P",
		ten: "P",
		eleven: "P",
		twelve: "P",
		thirteen: "P",
		fourteen: "P",
		fifteen: "P",
		sixteen: "P",
		seventeen: "P",
		eighteen: "P",
		nineteen: "T",
		twenty: "P",
		thirty: "P",
		twentyNine: "P",
		twentyEight: "P",
		twentySeven: "P",
		twentySix: "P",
		twentyFive: "P",
		twentyFour: "P",
		twentyThree: "P",
		twentyTwo: "P",
		twentyOne: "P",
		workingDays: "3",
		dayOff: "25",
		overtime: "1",
		total: "30",
	},
	{
		id: "5",
		name: "Duy Nguyen",
		one: "D",
		two: "P",
		three: "D",
		four: "P",
		five: "D",
		six: "P",
		seven: "P",
		eight: "P",
		nine: "P",
		ten: "P",
		eleven: "P",
		twelve: "P",
		thirteen: "P",
		fourteen: "P",
		fifteen: "P",
		sixteen: "P",
		seventeen: "P",
		eighteen: "P",
		nineteen: "T",
		twenty: "P",
		thirty: "P",
		twentyNine: "P",
		twentyEight: "P",
		twentySeven: "P",
		twentySix: "P",
		twentyFive: "P",
		twentyFour: "P",
		twentyThree: "P",
		twentyTwo: "P",
		twentyOne: "P",
		workingDays: "3",
		dayOff: "25",
		overtime: "1",
		total: "30",
	},
	{
		id: "6",
		name: "Khang Nguyen",
		one: "D",
		two: "P",
		three: "D",
		four: "P",
		five: "D",
		six: "P",
		seven: "P",
		eight: "P",
		nine: "P",
		ten: "P",
		eleven: "P",
		twelve: "P",
		thirteen: "P",
		fourteen: "P",
		fifteen: "P",
		sixteen: "P",
		seventeen: "P",
		eighteen: "P",
		nineteen: "T",
		twenty: "P",
		thirty: "P",
		twentyNine: "P",
		twentyEight: "P",
		twentySeven: "P",
		twentySix: "P",
		twentyFive: "P",
		twentyFour: "P",
		twentyThree: "P",
		twentyTwo: "P",
		twentyOne: "P",
		workingDays: "3",
		dayOff: "25",
		overtime: "1",
		total: "30",
	},
	{
		id: "7",
		name: "Da Nguyen",
		one: "D",
		two: "P",
		three: "D",
		four: "P",
		five: "D",
		six: "P",
		seven: "P",
		eight: "P",
		nine: "P",
		ten: "P",
		eleven: "P",
		twelve: "P",
		thirteen: "P",
		fourteen: "P",
		fifteen: "P",
		sixteen: "P",
		seventeen: "P",
		eighteen: "P",
		nineteen: "T",
		twenty: "P",
		thirty: "P",
		twentyNine: "P",
		twentyEight: "P",
		twentySeven: "P",
		twentySix: "P",
		twentyFive: "P",
		twentyFour: "P",
		twentyThree: "P",
		twentyTwo: "P",
		twentyOne: "P",
		workingDays: "3",
		dayOff: "25",
		overtime: "1",
		total: "30",
	},
];

let data = "Zangggg";

function HRPage() {
	const [tab, setTab] = useState("timekeeping");
	const handleChange = (status) => {
		setTab(status);
	};

	const [candidateData, setCandidateData] = useState([]);

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
		onChange: () => {},
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
		setMonthTimeKeepingData((prev) => {
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
	const newMonthTimeKeepingDataDefault = monthTimeKeepingDataDefault.map(
		(d, index) => {
			const keys = Object.keys(d);
			const o = { ...d };
			const infoKey = [
				"id",
				"name",
				"workingDays",
				"dayOff",
				"overtime",
				"total",
			];
			keys.forEach((key) => {
				if (!infoKey.includes(key)) {
					o[key] = (
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
							{d[key]}
						</CustomButton>
					);
				}
			});
			return o;
		}
	);
	const [monthTimeKeepingData, setMonthTimeKeepingData] = useState(
		newMonthTimeKeepingDataDefault
	);

	// useEffect(() => {
	//   (async () => {
	//     const employees = await getAllEmployee()
	//     const mapEmployees = employees.map(d => ({ ...d, name: d.firstName + " " + d.lastName }))
	//     setEmployeeData(mapEmployees)
	//   })()
	// }, [])

	const [tabTimekeeping, setTabTimekepping] = useState("dayTimekeeping");

	const [tabTimekeepingBtn, setTabTimekeppingBtn] = useState("day");
	const handleChangeTabTimekeeping = (statusRef) => {
		setTabTimekeppingBtn(statusRef.current.id);
		//setTabTimekepping(statusRef)
	};

	const dayRef = useRef(null);
	const monthRef = useRef(null);
	const chartRef = useRef(null);

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
						<TitleHome data={data}>Timekeeping</TitleHome>
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
								monthTimeKeepingData={monthTimeKeepingData}
							></MonthTimeKeeping>
						)}
						{tabTimekeepingBtn == "chart" && (
							<ChartTimekeeping
								chartTimeKeepingData={monthTimeKeepingData}
							></ChartTimekeeping>
						)}
					</div>
				)}
				{tab == "employee" && (
					<Employee onClick={handleOnClickID}></Employee>
				)}
				{tab == "candidate" && <Candidate />}
				{tab == "payroll" && <Payroll onClick={handleOnClickID}/>}

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
		</div>
	);
}

export default HRPage;
