import { useState, ScrollY } from "react";

import "./Profile.scss";
import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import avatar from "../../assets/images/LogoPNG.png"
import pen from "../../assets/edit.svg"
import Pin from "../../assets/pin.svg"



const Profile = ({ onClose, data, id }) => {
    
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
                        <div className="imgDisplay"><img src={avatar} style={{ width: '80px', height: '80px' }} /></div>

                        <div className="textDisplay">
                            <p className="name"  >{data?.name}</p>
                            <p className="position">{data?.position}</p>
                        </div>

                    </div>
                    <div className="fisrtAttribute">
                        <p className="attribute">PROFILE</p>
                        <img src={pen}></img>
                    </div>
                    <Display data={data?.name.split(' ').at(-1)}>First Name</Display>
                    <Display data={data?.name.split(' ').slice(0, data?.name.split(' ').length - 1).join(' ')}>Last Name</Display>
                    <Display data={data?.birthplace}>Birthplace</Display>
                    <Display data={data?.ethnictity}>Ethnicity</Display>
                    <Display data={data?.citizenId}>Citizen ID</Display>
                    <Display data={data?.birthdate}>Birthday</Display>
                    <Display data={data?.address}>Address</Display>
                    <Display data={data?.hometown}>Hometown</Display>
                    <Display data={data?.phoneNumber}>Phone Number</Display>

                </div>
                <div className="secondColumn">
                    <p className="attribute" >DEPARTMENT</p>

                    <Display data={data?.department}>Department</Display>
                    <p className="attribute" style={{ marginTop: '50px' }}>POSITION</p>

                    <Display data={data?.position}>Position</Display>
                    <p className="attribute" style={{ marginTop: '50px' }}>ONBOARDING</p>

                    <Display data={data?.startDate}>Start Date</Display>
                    <Display data={data?.contractDate}>Contract Date</Display>

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
