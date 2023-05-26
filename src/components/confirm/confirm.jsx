import { Children } from "react";

import "./Confirm.scss";
//import { Button } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

const Confirm = ({ children, type, text }) => {
	//const {children, type} = props;
	let className = "button";
	switch (children) {
		case "Accept":
			className = "accept";
			break;
		case "Delete":
		case "Reject":
			className = "delete";
			break;
		case "Export":
			className = "confirm";
			break;
	}

	return (
		<div className="confirmContainer" >
			<div className="box">
				<div className={className}>
					{children}
					<p className="confirmText">
						Do you want to <span className="childrenText">{children}</span> this {text}
					</p>
					<div className="confirmBtn">
						<CustomButton style={{width: "100%"}} type={type}>{children}</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
