import { Button } from "@mui/material";
import "./ThanksForUploadCV.scss";
import { useNavigate } from "react-router-dom";

export default function ThanksForUploadCV() {
	const navigate = useNavigate();
	return (
		<div className="thank-for-upload-cv-container">
			<h1>Thanks for uploading your cv</h1>
			<h2>We will contact you as soon as possible</h2>
			<Button
				onClick={() => navigate("/")}
				variant="contained"
				sx={{ width: 400, marginTop: 4 }}
			>
				Back to home
			</Button>
		</div>
	);
}
