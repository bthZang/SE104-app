import { useState, ScrollY, useRef } from "react";

import "./Profile.scss";
import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import avatar from "../../assets/images/LogoPNG.png";
import pen from "../../assets/edit.svg";
import Pin from "../../assets/pin.svg";
import CLOSE_ICON from "../../assets/close.svg";
import RESIZE from "../../assets/resize.svg";
import { Button } from "@mui/material";
import Dropdown from "react-dropdown";

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

const Profile = ({ onClose, data, id, onSave, onDelete }) => {
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
  // const departmentRef = useRef();
  const positionRef = useRef();
  const startDateRef = useRef();
  const contractDateRef = useRef();

  function handleSave() {
    const newData = {
      id,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      birthplace: birthplaceRef.current.value,
      ethnicity: ethnicityRef.current.value,
      gender: genderRef.current.value,
      citizenId: citizenIdRef.current.value,
      birthdate: birthDayRef.current.value,
      dept: options.indexOf(selectedOptions)+1,
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

  const [selectedOptions, setSelectedOptions] = useState(null);

  const options = [
    "Director's Office",
    "Human Resources",
    "Accounting",
    "Software",
    "Quality Management",
    "Sales",
    "Support/Deployment"
  ]


  const handleOnChange = (e) => {
    setSelectedOptions(e.value);
    // console.log(selectedOptions);
  };

  return (
    <div className="containerProfile" onClick={onClose}>
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
                <p className="position">{data?.position}</p>
              </div>
            </div>
            <div className="toolBox">
              <Button
                onClick={handleSave}
                variant="contained"
                color="info"
                disabled={!isEditable}
              >
                Save
              </Button>
              <Button
                onClick={() => setIsEditable((prev) => !prev)}
                variant="contained"
                color="info"
              >
                {isEditable ? "Cancel" : "Change"}
              </Button>
              <Button onClick={onDelete} variant="outlined" color="error">
                Delete
              </Button>
            </div>
          </div>
        </div>
        <div className="profileContainerContent">
          <div className="firstColumn">
            <div className="fisrtAttribute">
              <p className="attribute">PROFILE</p>
              <img
                className="imgPen"
                src={pen}
                onClick={handleOnClickPen}
              ></img>
            </div>
            <Display
              ref={firstNameRef}
              isEditable={isEditable}
              data={data?.name.split(" ").at(-1)}
            >
              First Name
            </Display>
            <Display
              ref={lastNameRef}
              isEditable={isEditable}
              data={data?.name
                .split(" ")
                .slice(0, data?.name.split(" ").length - 1)
                .join(" ")}
            >
              Last Name
            </Display>
            <Display
              ref={genderRef}
              isEditable={isEditable}
              data={data?.gender}
            >
              Gender
            </Display>
            <Display
              ref={birthplaceRef}
              isEditable={isEditable}
              data={data?.birthplace}
            >
              Birthplace
            </Display>
            <Display
              ref={ethnicityRef}
              isEditable={isEditable}
              data={data?.ethnicity}
            >
              Ethnicity
            </Display>
            <Display
              ref={citizenIdRef}
              isEditable={isEditable}
              data={data?.citizenId}
            >
              Citizen ID
            </Display>
            <Display
              ref={birthDayRef}
              isEditable={isEditable}
              data={data?.birthdate}
            >
              Birthday
            </Display>
            <Display
              ref={addressRef}
              isEditable={isEditable}
              data={data?.address}
            >
              Address
            </Display>
            <Display
              ref={homeTownRef}
              isEditable={isEditable}
              data={data?.hometown}
            >
              Hometown
            </Display>
            <Display
              ref={phoneNumberRef}
              isEditable={isEditable}
              data={data?.phoneNumber}
            >
              Phone Number
            </Display>
          </div>
          <div className="secondColumn">
            <p className="attribute department">DEPARTMENT</p>
            <Dropdown
              //width={200}
              // ref={departmentRef}
              options={options}
              value={selectedOptions}
              onChange={(e) => handleOnChange(e)}
              placeholder={options[data?.dept.id - 1]}
              className="customChangeDropdown"
              disabled={!isEditable}
            ></Dropdown>

            <p className="attribute" style={{ marginTop: "50px" }}>
              POSITION
            </p>
            <Display
              ref={positionRef}
              isEditable={isEditable}
              data={data?.position}
            >
              Position
            </Display>

            <p className="attribute" style={{ marginTop: "50px" }}>
              ONBOARDING
            </p>
            <Display
              ref={startDateRef}
              isEditable={isEditable}
              data={data?.startDate}
            >
              Start Date
            </Display>
            <Display
              ref={contractDateRef}
              isEditable={isEditable}
              data={data?.contractDate}
            >
              Contract Date
            </Display>



            {/* <CustomButton type='short' style={{ backgroundColor: color, borderRadius: '10px', width: '213px', fontSize: '21px', padding: '20px 0', alignSelf: 'end', marginTop: '38px', }}    >Delete</CustomButton> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
