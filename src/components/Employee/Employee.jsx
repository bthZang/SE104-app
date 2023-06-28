import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import TitleHome from "../titleHome/titleHome";

import { Button } from "@mui/material";
import CheckBox from "../CheckBox/CheckBox";
import Profile from "../Profile/Profile";
import Search from "../search/search";

import "./Employee.scss";
import { EmployeeContext } from "../../contexts/EmployeeContext";
import { addMultiEmployee, deleteEmployeeById, getAllEmployee, updateEmployee } from "../../api/EmployeeAPI";
import Swal from "sweetalert2";
import { Spin } from "antd";



const Employee = ({ onClick }) => {
	const { employeeData, setEmployeeData } = useContext(EmployeeContext)

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
			name: "Name",
			selector: "name",
			sortable: true,
			width: "303px",
		},
		{
			name: "Gender",
			selector: "gender",
			cell: (row) => row.gender || <span>Null</span>
		},
		{
			name: "Birthplace",
			selector: "birthplace",
			sortable: true,
			cell: (row) => row.birthplace || <span>Null</span>
		},
		{
			name: "Ethnicity",
			selector: "ethnicity",
			sortable: true,
			cell: (row) => row.ethnicity || <span>Null</span>
		},
		{
			name: "Citizen Id",
			selector: "citizenId",
			cell: (row) => row.citizenId || <span>Null</span>
		},
		{
			name: "Birthdate",
			selector: "birthdate",
			sortable: true,
			cell: (row) => row.birthdate || <span>Null</span>
		},
		{
			name: "Department",
			selector: "dept.name",
			sortable: true,
			cell: (row) => renderCell(row.dept)
		},
		{
			name: "Position",
			selector: "position",
			sortable: true,
			cell: (row) => row.position || <span>Null</span>
		},
	];

	const renderCell = (value) => {
		if (value == null)
			return <span>Null</span>
		return value.name || <span>Null</span>;
	};

	const [selectedId, setSelectedId] = useState(null);
	const [searchKeyword, setSearchKeyword] = useState("");

	const [newEmployeeData, setNewEmployeeData] = useState([]);
	const [checkList, setCheckList] = useState([]);

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getAllEmployee().then(response => { setEmployeeData(response) })
		// console.log(employeeData)
		setCheckList(employeeData.map(() => false));
	}, []);



	const handleDataChange = () => {
		// console.log("data change", employeeData)
		setNewEmployeeData(
			employeeData.map((data, index) => ({
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
	}

	useEffect(() => {
		handleDataChange()
	}, [JSON.stringify(employeeData), JSON.stringify(checkList)]);

	useEffect(() => {
		setCheckList(employeeData.map(() => isCheckAll));
	}, [isCheckAll]);

	useEffect(() => {
		setIsLoading(false)
	}, [JSON.stringify(newEmployeeData)])

	const callAPI = () => {
		getAllEmployee().then((response) => {
			setEmployeeData(response)
			setIsLoading(false)
		})
		setCheckList(employeeData.map(() => false));
	}

	function handleDeleteItem() {
		const idList = employeeData
			.filter((_, index) => checkList[index] == true)
			.map((v) => v.id);
		setIsLoading(true)
		const callFunc = () => {
			idList.forEach((item, index) => {
				deleteEmployeeById(item).then(res => {
					if (index == idList.length - 1) {
						Swal.fire({
							icon: 'success',
							text: 'Successful!',
							showConfirmButton: false,
							timer: 1500
						})
						callAPI()
					}
				})
			})
		}

		confirmMessage("delete selected employee", callFunc, () => {
			setIsLoading(false)
			setCheckList(employeeData.map(() => false))
		})




		// handleDataChange()

	}

	function handleExport() {
		const data = [Object.keys(employeeData[0])];
		employeeData
			.filter((_, index) => checkList[index] == true)
			.forEach((d) => data.push(Object.values(d)));
		const workbook = XLSX.utils.book_new();
		const worksheet = XLSX.utils.aoa_to_sheet(data);
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
		XLSX.writeFile(workbook, "Employee data.xlsx");
	}

	let [importedData, setImportedData] = useState(employeeData);

	const handleImport = (event) => {

		let file = event.target.files[0];
		let reader = new FileReader();

		reader.onload = (e) => {
			let data = new Uint8Array(e.target.result);
			let workbook = XLSX.read(data, { type: "array" });
			let worksheet = workbook.Sheets[workbook.SheetNames[0]];
			let jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
			let headers = jsonData[0];
			let rows = jsonData.slice(1);
			let newData = rows.map((row) =>
				headers.reduce(
					(obj, header, index) => ({ ...obj, [header]: row[index] }),
					{}
				)
			);

			setIsLoading(true)

			const callFunc = () => {
				addMultiEmployee(newData)
					.then(res => {
						if (res) {
							Swal.fire({
								icon: 'success',
								text: 'Successful!',
								showConfirmButton: false,
								timer: 1500
							})
							callAPI()
						} else {
							setIsLoading(false)
						}
					})
			}

			confirmMessage("import this file", callFunc, () => { setIsLoading(false) })


		};

		reader.readAsArrayBuffer(file);
	};

	const confirmMessage = (mess, callFunc, cancelFunc) => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		})

		swalWithBootstrapButtons.fire({
			title: 'Are you sure?',
			text: `Do you really want to ${mess}?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
		}).then((result) => {
			if (result.isConfirmed) {
				callFunc()
				// swalWithBootstrapButtons.fire(
				// 	'Success',
				// 	'',
				// 	'success'
				// )
			}
			else {
				cancelFunc()
			}
		})

	}


	return (
		<div className="containerEmployee">
			<div>
				<TitleHome
					children={"Employee"}
					data={employeeData}
					showSearch={false}
				></TitleHome>
				<div className="employee">
					<div className="tools">
						<input
							type="file"
							className="inputFile"
							onChange={handleImport}
							onClick={(e) => e.target.value = null}
						/>
						<Button
							onClick={handleDeleteItem}
							variant="outlined"
							color="error"
							disabled={checkList.every((v) => v == false)}
						>
							Delete
						</Button>
						<Button
							onClick={handleExport}
							variant="outlined"
							color="info"
							disabled={checkList.every((v) => v == false)}
						>
							Export data
						</Button>
						<div className="search">
							<Search onSearch={setSearchKeyword} />
						</div>
					</div>
					{isLoading == true && <Spin />}
					{isLoading == false &&
						<DataTable
							columns={columns}
							data={newEmployeeData.filter((d) =>
								d.name.toLowerCase().includes(searchKeyword)
							)}
							pagination={true}
							highlightOnHover={true}
							striped={true}
							onRowClicked={(row) => {
								setSelectedId(row.id);
								onClick(row.id);
							}}
						></DataTable>}
					{selectedId !== null && (
						<Profile
							id={selectedId}
							data={employeeData.find((d) => d.id == selectedId)}
							onClose={() => setSelectedId(null)}
							onSave={(newData) => {
								setIsLoading(true)

								const callFunc = () => {
									updateEmployee(selectedId, newData)
										.then(res => {
											if (res) {
												Swal.fire({
													icon: 'success',
													text: 'Successful!',
													showConfirmButton: false,
													timer: 1500
												})
												callAPI()
											} else {
												setIsLoading(false)
											}
										})
								}

								confirmMessage("modify information of this employee", callFunc, () => {
									setIsLoading(false)
								})
								// console.log(newData)

							}}
							onDelete={() => {
								setIsLoading(true)

								const callFunc = () => {
									deleteEmployeeById(selectedId)
										.then(res => {
											if (res) {
												Swal.fire({
													icon: 'success',
													text: 'Successful!',
													showConfirmButton: false,
													timer: 1500
												})
												callAPI()
											} else {
												setIsLoading(false)
											}
										})
								}

								confirmMessage("delete this employee", callFunc, () => {
									setIsLoading(false)
								})

							}}
						></Profile>
					)}

					{/* {selectedId !== null && <YourComponent id={selectedId} />} */}
				</div>
			</div>
		</div>
	);
};

export default Employee;
