import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	TextField,
	Typography,
	Select,
} from "@mui/material";
import { useContext, useRef, useState } from "react";

import "./UploadCV.scss";
import { CandidateContext } from "../../contexts/CandidateContext";
import { useNavigate } from "react-router-dom";

export default function UploadCV() {
	const navigate = useNavigate();
	const { setCandidateData } = useContext(CandidateContext);

	const nameRef = useRef();
	const emailRef = useRef();
	const applyPositionRef = useRef();
	const cvFileRef = useRef();
	const [gender, setGender] = useState();
	const [cvFile, setCvFile] = useState();

	function handleSubmitCv() {
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const applyPosition = applyPositionRef.current.value;

		console.log({ gender });
		setCandidateData((prev) => [
			...prev,
			{ name, email, gender, applyPosition, CV: cvFile },
		]);

		navigate("/thanks-for-upload-cv");
	}

	return (
		<div className="uploadCV__container">
			<h1>Upload your CV now!</h1>
			<form>
				<FormControl fullWidth margin="normal">
					<TextField
						inputRef={nameRef}
						required
						label={"Name"}
						fullWidth
					/>
				</FormControl>
				<FormControl fullWidth margin="normal">
					<TextField
						required
						inputRef={emailRef}
						label={"Email"}
						fullWidth
					/>
					<FormHelperText>
						We&apos;ll never share your email.
					</FormHelperText>
				</FormControl>
				<FormControl fullWidth margin="normal">
					<TextField
						required
						inputRef={applyPositionRef}
						label={"Apply position"}
						fullWidth
					/>
				</FormControl>
				<FormControl fullWidth margin="normal">
					<InputLabel id="demo-simple-select-label">Gender</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						placeholder="Choose your gender"
						value={gender}
						label="Gender"
						onChange={(e) => setGender(e.target.value)}
					>
						<MenuItem value={"Male"}>Male</MenuItem>
						<MenuItem value={"Female"}>Female</MenuItem>
					</Select>
				</FormControl>
				<input
					type="file"
					ref={cvFileRef}
					multiple={false}
					onChange={(e) => setCvFile(e.target.files[0])}
					style={{ display: "none" }}
				/>
				<Box
					margin="normal"
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						marginTop: 2,
					}}
				>
					<Button
						variant="outlined"
						onClick={() => {
							cvFileRef.current.click();
						}}
					>
						Upload CV
					</Button>
					<Typography color={cvFile ? "black" : "gray"}>
						{cvFile?.name || "No file chosen"}
					</Typography>
				</Box>
				<Button
					onClick={handleSubmitCv}
					variant="contained"
					fullWidth
					sx={{ marginTop: 4 }}
				>
					Upload CV
				</Button>
			</form>
		</div>
	);
}
