import { useState, ScrollY, useRef } from "react";

import './IndividualTableContent.scss'

import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import pen from "../../assets/edit.svg";
import Pin from "../../assets/pin.svg";
import CLOSE_ICON from "../../assets/close.svg";
import RESIZE from "../../assets/resize.svg";
import { Button } from "@mui/material";


const IndividualTableContent = ({ onClose, data, name, id, onSave, onDelete }) => {
    const [isFullScreen, setIsFullScreen] = useState(false)

    const [color, setColor] = useState("gray")
    const [keys, setKeys] = useState(Object.keys(data))

    const newData = keys.map((key) => {
        if (!(typeof data[key] === "object" && Object.prototype.toString.call(data[key]) === "[object Object]"))
            return {
                name: key,
                data: data[key],
            }

    }).filter(item => item !== undefined)


    const displayList = newData.map((item) => {
        return (
            <Display data={item.data}>
                {item.name}
            </Display>
        )
    })


    // console.log("dô nè má:", data[keys[1]])

    return (
        <div className="containerIndividualTableContent" onClick={onClose}>
            <div
                className={`boxProfile ${isFullScreen ? "fullScreen" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="header">
                    <div
                        className="resizeIcon"
                        onClick={() => {
                            setIsFullScreen((prev) => !prev);
                        }}
                    >
                        <img src={RESIZE} />
                    </div>
                    <div className="closeIcon" onClick={onClose}>
                        <img src={CLOSE_ICON} />
                    </div>
                    <div className="headerContent">
                        <div className="titleDisplay">
                            <div className="textDisplay">
                                <p className="name">{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tableContainerContent">
                    <div className="firstColumn">
                        {displayList}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualTableContent;
