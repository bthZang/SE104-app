import { useState, ScrollY } from "react";

import "./Profile.scss";
import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import avatar from "../../assets/images/LogoPNG.png"
import pen from "../../assets/edit.svg"
import Pin from "../../assets/pin.svg"
import CLOSE_ICON from "../../assets/close.svg"
import RESIZE from "../../assets/resize.svg"
import { Button } from "@mui/material";

const columns = [

    {
        name: 'ID',
        selector: 'id',
        sortable: true,

    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        width: '303px'
    },
    {
        name: 'Gender',
        selector: 'gender',
    },
    {
        name: 'Birthplace',
        selector: 'birthplace',
        sortable: true,

    },
    {
        name: 'Ethnicity',
        selector: 'ethnicity',
        sortable: true,

    },
    {
        name: 'Citizen Id',
        selector: 'citizenId',
    },
    {
        name: 'Birthdate',
        selector: 'birthdate',
        sortable: true,
    },
    {
        name: 'Department',
        selector: 'department',
        sortable: true,
    },
    {
        name: 'Position',
        selector: 'position',
        sortable: true,
    }
]

const Profile = ({ onClose, data, id }) => {
    const [isFullScreen, setIsFullScreen] = useState(false)

    const [color, setColor] = useState('gray')
    const [attachment, setAttachment] = useState(null)
    const handleAttachment = (e) => {
        setAttachment(e.target.files[0])
        setColor('red')
    }

    const [isEditable, setIsEditable] = useState(false)
    const handleOnClickPen = () => {
        setIsEditable(true)
    }

    return (
        <div className="containerProfile" onClick={onClose} >
            <div className={`boxProfile ${isFullScreen ? 'fullScreen' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="resizeIcon" onClick={() => {
                    setIsFullScreen(prev => !prev)
                }}><img src={isFullScreen ? CLOSE_ICON : RESIZE} /></div>
                <div className="firstColumn">
                    <div className="titleDisplay" >
                        <div className="imgDisplay"><img src={avatar} style={{ width: '80px', height: '80px' }} /></div>

                        <div className="textDisplay">
                            <p className="name"  >{data?.name}</p>
                            <p className="position">{data?.position}</p>
                        </div>

                    </div>
                    <div className="fisrtAttribute">
                        <p className="attribute">PROFILE</p>
                        <img className="imgPen" src={pen} onClick={handleOnClickPen}></img>
                    </div>
                    <Display isEditable={isEditable} data={data?.name.split(' ').at(-1)}>First Name</Display>
                    <Display isEditable={isEditable} data={data?.name.split(' ').slice(0, data?.name.split(' ').length - 1).join(' ')}>Last Name</Display>
                    <Display isEditable={isEditable} data={data?.birthplace}>Birthplace</Display>
                    <Display isEditable={isEditable} data={data?.ethnictity}>Ethnicity</Display>
                    <Display isEditable={isEditable} data={data?.citizenId}>Citizen ID</Display>
                    <Display isEditable={isEditable} data={data?.birthdate}>Birthday</Display>
                    <Display isEditable={isEditable} data={data?.address}>Address</Display>
                    <Display isEditable={isEditable} data={data?.hometown}>Hometown</Display>
                    <Display isEditable={isEditable} data={data?.phoneNumber}>Phone Number</Display>

                </div>
                <div className="secondColumn">
                    <p className="attribute" >DEPARTMENT</p>

                    <Display isEditable={isEditable} data={data?.department}>Department</Display>
                    <p className="attribute" style={{ marginTop: '50px' }}>POSITION</p>

                    <Display isEditable={isEditable} data={data?.position}>Position</Display>
                    <p className="attribute" style={{ marginTop: '50px' }}>ONBOARDING</p>

                    <Display isEditable={isEditable} data={data?.startDate}>Start Date</Display>
                    <Display isEditable={isEditable} data={data?.contractDate}>Contract Date</Display>

                    <div >
                        <p className="textAttachment" >Resignation decision</p>
                        <label className="attachment">

                            <img src={Pin} className="imgPin" ></img>
                            {/* cai box nay se bi an */}
                            <input type="file" className="inputFile" onChange={handleAttachment} ></input>

                            {/* cai box nay hien thi len tren ne */}
                            <div className="inputFileBox" >{attachment?.name || 'No file attached'}</div>
                        </label>

                    </div>

                    {/* <CustomButton type='short' style={{ backgroundColor: color, borderRadius: '10px', width: '213px', fontSize: '21px', padding: '20px 0', alignSelf: 'end', marginTop: '38px', }}    >Delete</CustomButton> */}
                    <Button onClick={() => {}} variant="contained" color="info" disabled={!isEditable}>Save</Button>
                    <Button onClick={() => {}} variant="outlined" color="error">Delete</Button>

                </div>
            </div>
        </div>
    );
};

export default Profile;
