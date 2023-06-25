import { useState, ScrollY, useRef } from "react";

import './IndividualTableContent.scss'

import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import pen from "../../assets/edit.svg";
import Pin from "../../assets/pin.svg";
import CLOSE_ICON from "../../assets/close.svg";
import RESIZE from "../../assets/resize.svg";
import { Button } from "@mui/material";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
const IndividualTableContent = ({ onClose, data, name, isChart = false }) => {
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

    const displayChart = <BarChart
        width={isFullScreen ? 800 : 500}
        height={isFullScreen ? 500 : 370}
        data={[data]}
        margin={{ top: 5, right: 190, left: 20, bottom: 5 }}
    >
        <XAxis dataKey="employee.name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="working_days" stackId="a" fill="#82ca9d" />
        <Bar dataKey="days_off" stackId="a" fill="#8884d8" />
        <Bar dataKey="overtime" stackId="a" fill="#ffc658" />
    </BarChart>


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
                {isChart == false &&
                    <div className="tableContainerContent">
                        <div className="firstColumn">
                            {displayList}
                        </div>
                    </div>}
                {isChart == true && displayChart}
            </div>
        </div>
    );
};

export default IndividualTableContent;
