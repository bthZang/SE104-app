
import { useState, useEffect, useRef, useContext } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@mui/material";
import CheckBox from "../CheckBox/CheckBox";
import Search from "../search/search";


import CustomButton from "../CustomButton/CustomButton";
import TitleHome from "../titleHome/titleHome";
import AddAttachmentConfirm from "../AddAttachmentConfirm/AddAttachmentConfirm";


import "./Candidate.scss";
import { CandidateContext } from "../../contexts/CandidateContext";
import { EmployeeContext } from "../../contexts/EmployeeContext";
import { acceptCandidate, getAllCandidate, rejectCandidate, uploadInterviewResult } from "../../api/CandidateAPI";
import { downloadFile } from "../../api/FileAPI";
import Swal from "sweetalert2";
import { Spin } from "antd";





const Candidate = ({ onClick, onClose, data }) => {
	const { candidateData, setCandidateData } = useContext(CandidateContext);
	const { employeeData, setEmployeeData } = useContext(EmployeeContext);

	const [click, setClick] = useState(null);


	const handleOnClick = (id) => {
		const candidate = candidateData.find((d) => d.id == id);
		setEmployeeData((prev) => [
			...prev,
			{
				id,
				name: candidate.name,
				position: candidate.applyPosition,
				gender: candidate.gender,
			},
		]);
		setCandidateData((prev) => [...prev.filter((d) => d.id != id)]);
	};

	const [newCandidateData, setNewCandidateData] = useState([]);
	const [selectedId, setSelectedId] = useState(null);
	const [isLoading, setIsLoading] = useState(true)
	const [searchKeyword, setSearchKeyword] = useState("");
	const [checkList, setCheckList] = useState([]);
	const [isCheckAll, setIsCheckAll] = useState(false);
	const [call, setCall] = useState(null)

	// const [attachment, setAttachment] = useState([]);

	const handleAttachment = (e, id) => {
		const file = e.target.files[0];

		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		})

		swalWithBootstrapButtons.fire({
			title: 'Are you sure?',
			text: "Do you really want to attach this file?",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
		}).then((result) => {
			if (result.isConfirmed) {
				uploadInterviewResult(id, file)
				swalWithBootstrapButtons.fire(
					'Success',
					'',
					'success'
				)
			}
		})


	};

	const handleRowClicked = (row) => {
		downloadFile(row)
	}

	useEffect(() => {
		getAllCandidate().then(res => {
			setCandidateData(res)
		})
	}, [])

	useEffect(() => {
		handleDataChange()
	}, [JSON.stringify(candidateData), JSON.stringify(checkList)])

	useEffect(() => {
		setIsLoading(false)
	}, [JSON.stringify(newCandidateData)])



	const handleDataChange = () => {
		setNewCandidateData(
			candidateData.map((i, index) => {
				// console.log(i.name ,i.interview_result)
				const interviewResultTag = (i.interview_result === null) ?

					<input
						type="file"
						className="inputFile"
						onChange={(e) => handleAttachment(e, i.id)}
					/>
					:
					<a
						onClick={() => handleRowClicked(i.interview_result.filename)}>
						{i.interview_result.filename}
					</a>


				return {
					...i,
					cvBtn: (<a
						onClick={() => handleRowClicked(i.cv.filename)}>
						{i.cv.filename}
					</a>),
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
					interviewResult: interviewResultTag,
				}
			}))
	}


	useEffect(() => {
		setCheckList(candidateData.map(() => isCheckAll));
	}, [isCheckAll]);





	function handleDeleteItem() {
		const idList = candidateData
			.filter((_, index) => checkList[index] == true)
			.map((v) => v.id);

		setIsLoading(true)

		idList.forEach((element, index) => {
			rejectCandidate(element).then(res => {
				if (index == idList.length - 1) {
					Swal.fire({
						icon: 'success',
						text: 'Successful!',
						showConfirmButton: false,
						timer: 1500
					})
					getAllCandidate().then(res => {
						setCandidateData(res)
						setIsLoading(false)
						setCheckList([])
					})
				}
			})
		});


	}

	function handleAcceptItem() {

		const idList = candidateData
			.filter((_, index) => checkList[index] == true)
			.map((v) => v.id);
		setIsLoading(true)

		idList.forEach((element, index) => {
			acceptCandidate(element).then(res => {
				if (index == idList.length - 1) {
					Swal.fire({
						icon: 'success',
						text: 'Successful!',
						showConfirmButton: false,
						timer: 1500
					})
					getAllCandidate().then(res => {
						setCandidateData(res)
						setIsLoading(false)
						setCheckList([])
					})
				}
			})
		});
	}

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
			name: "Name",
			selector: "name",
			sortable: true,
		},
		{
			name: "Email",
			selector: "email",
			sortable: true,
		},
		// {
		//   name: "Interview Status",
		//   selector: "interviewStatus",
		//   sortable: true,
		//   width: "300px",
		// },
		{
			name: "Interview Result",
			selector: "interviewResult",
			sortable: true,
			width: "300px",
			enctype: "multipart",
		},
		{
			name: "Gender",
			selector: "gender",
			sortable: true,
		},
		{
			name: "CV",
			selector: "cvBtn",
			sortable: true,
		},
		{
			name: "Apply position",
			selector: "applyPosition",
			sortable: true,
		},
	];

	return (
		<div className="containerCandidate">
			<div>
				<div className="titleTable">
					<TitleHome
						children={"Candidate"}
						data={candidateData}
						showSearch={false}
					></TitleHome>

					<div className="tools">
						<Button
							onClick={handleAcceptItem}
							variant="outlined"
							color="info"
							disabled={checkList.every((v) => v == false)}
						>
							Accept
						</Button>
						<Button
							onClick={handleDeleteItem}
							variant="outlined"
							color="error"
							disabled={checkList.every((v) => v == false)}
						>
							Reject
						</Button>
						<div className="search">
							<Search onSearch={setSearchKeyword} />
						</div>
					</div>
				</div>

				<div className="candidate">
					{isLoading == true && <Spin />}
					{isLoading == false &&
						<DataTable
							columns={columns}
							data={newCandidateData}
							pagination={true}
							highlightOnHover={true}
							striped={true}
						></DataTable>}
				</div>
			</div>
		</div>
	);
};

export default Candidate;