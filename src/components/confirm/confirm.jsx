import { Children, useState } from "react";

import "./Confirm.scss";
//import { Button } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

const Confirm = ({ children, text, onClose, onClick}) => {
	//const {children, type} = props;

	let className = "button";
	switch (children) {
		case "Accept":
			className = "accept";
			break;
		case "Delete":
			// onclick=()=>{handleOnClick('delete')}
			className = "delete";
			break;
		case "Reject":
			className = "delete";
			break;
		case "Export":
		case "Export all":
			className = "confirm";
			break;
	}

	return (
		<div className="confirmContainer" onClick={onClose} >
			<div className="box" onClick={e => e.stopPropagation()}>
				<div className={className}>
					<p className="confirmText">
						Do you want to <span className="childrenText">{children}</span> this {text}
					</p>
					<div className="confirmBtn">
						<CustomButton onClick={() => {
							onClick()
							onClose()
						}} style={{ width: "100%" }} type="long" >{children}</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
