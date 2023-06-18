import { useState, ScrollY, useRef } from "react";

import "./EmployeeChart.scss";
import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import avatar from "../../assets/images/LogoPNG.png";
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

const columns = [
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
  },
  {
    name: "Birthplace",
    selector: "birthplace",
    sortable: true,
  },
  {
    name: "Ethnicity",
    selector: "ethnicity",
    sortable: true,
  },
  {
    name: "Citizen Id",
    selector: "citizenId",
  },
  {
    name: "Birthdate",
    selector: "birthdate",
    sortable: true,
  },
  {
    name: "Department",
    selector: "department",
    sortable: true,
  },
  {
    name: "Position",
    selector: "position",
    sortable: true,
  },
];

const EmployeeChart = ({ onClose, data, id, onSave, onDelete }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [color, setColor] = useState("gray");
  const [attachment, setAttachment] = useState(null);
  const handleAttachment = (e) => {
    setAttachment(e.target.files[0]);
    setColor("red");
  };

  const [isEditable, setIsEditable] = useState(false);
  const handleOnClickPen = () => {
    setIsEditable(true);
  };

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthplaceRef = useRef();
  const ethnicityRef = useRef();
  const genderRef = useRef();
  const citizenIdRef = useRef();
  const birthDayRef = useRef();
  const addressRef = useRef();
  const homeTownRef = useRef();
  const phoneNumberRef = useRef();
  const departmentRef = useRef();
  const positionRef = useRef();
  const startDateRef = useRef();
  const contractDateRef = useRef();

  function handleSave() {
    const newData = {
      id,
      name: lastNameRef.current.value + " " + firstNameRef.current.value,
      birthplace: birthplaceRef.current.value,
      ethnictity: ethnicityRef.current.value,
      gender: genderRef.current.value,
      citizenId: citizenIdRef.current.value,
      birthdate: birthDayRef.current.value,
      department: departmentRef.current.value,
      position: positionRef.current.value,
      address: addressRef.current.value,
      hometown: homeTownRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      startDate: startDateRef.current.value,
      contractDate: contractDateRef.current.value,
    };

    onSave(newData);
    setIsEditable(false);
  }

  return (
    <div className="containerEmployeeChart" onClick={onClose}>
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
              <div className="imgDisplay">
                <img src={avatar} style={{ width: "80px", height: "80px" }} />
              </div>

              <div className="textDisplay">
                <p className="name">{data?.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profileContainerContent">
          <BarChart
            width={isFullScreen ? 800 : 500}
            height={isFullScreen ? 500 : 370}
            data={[data]}
            margin={{ top: 5, right: 190, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="workingDays" stackId="a" fill="#82ca9d" />
            <Bar dataKey="dayOff" stackId="a" fill="#8884d8" />
            <Bar dataKey="overtime" stackId="a" fill="#ffc658" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default EmployeeChart;
