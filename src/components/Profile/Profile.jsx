import { useState, ScrollY } from "react";

import "./Profile.scss";
import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import avatar from "../../assets/images/LogoPNG.png"
import pen from "../../assets/edit.svg"
import Pin from "../../assets/pin.svg"



const Profile = ({ onClose, data }) => {
    
    const [color, setColor] = useState('gray')
    const [attachment, setAttachment] = useState(null)
    const handleAttachment = (e) => {
        setAttachment(e.target.files[0])
        setColor('red')
    }
    

    return (
        <div className="containerProfile" onClick={onClose} >
            <div className="boxProfile" onClick={e => e.stopPropagation()}>
                <div className="firstColumn">

                    <div className="titleDisplay" >
                        <div className="imgDisplay"><img src={avatar} style={{ width: '100px', height: '100px' }} /></div>

                        <div className="textDisplay">
                            <p className="name"  >{data}</p>
                            <p className="position">{data}</p>
                        </div>

                    </div>
                    <div className="fisrtAttribute">
                        <p className="attribute">PROFILE</p>
                        <img src={pen}></img>
                    </div>
                    <Display data={data}>First Name</Display>
                    <Display data={data}>Last Name</Display>
                    <Display data={data}>Birthplace</Display>
                    <Display data={data}>Ethnicity</Display>
                    <Display data={data}>Citizen ID</Display>
                    <Display data={data}>Birthday</Display>
                    <Display data={data}>Address</Display>
                    <Display data={data}>Hometown</Display>
                    <Display data={data}>Phone Number</Display>

                </div>
                <div className="secondColumn">
                    <p className="attribute" >DEPARTMENT</p>

                    <Display data={data}>Department</Display>
                    <p className="attribute" style={{ marginTop: '50px' }}>POSITION</p>

                    <Display data={data}>Position</Display>
                    <p className="attribute" style={{ marginTop: '50px' }}>ONBOARDING</p>

                    <Display data={data}>Start Date</Display>
                    <Display data={data}>Contract Date</Display>

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

                    <CustomButton type='short' style={{backgroundColor :color, borderRadius: '10px', width: '213px', fontSize: '21px', padding: '20px 0', alignSelf: 'end', marginTop: '38px' }}    >Delete</CustomButton>

                </div>
            </div>
        </div>
    );
};

export default Profile;
