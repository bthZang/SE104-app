import { Children } from "react";

import "./CustomButton.scss";
//import { Button } from "@mui/material";

const CustomButton = ({ children, type, style }) => {
	//const {children, type} = props;
	let className = "button";
	if (type == "short") {
		switch (children) {
			case "Change":
			case "Send":
			case "Export":
			case "Add new account":
				className = "shortBlue";
				break;
			case "Delete":
			case "Reject":
				className = "shortRed";
				break;
			case "Accept":
				className = "shortGreen";
				break;
		}
	} else if (type == "long")
		switch (children) {
			case "Change":
			case "Add":
			case "Confirm":
			case "Change password":
			case "Change email":
			case "Add new account":
				className = "longBlue";
				break;
			case "Delete":
			case "Reject":
				className = "longRed";
				break;
			case "Accept":
				className = "longGreen";
				break;
			case "Cancel":
				className = "longGray";
				break;
		}
	else if (type == "normal" && children == "Export all")
		className = "normalBlue";

	return (
		<div className={className} style={style}>
			{children}
		</div>
	);
};

export default CustomButton;
