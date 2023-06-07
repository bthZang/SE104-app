import { useState, ScrollY } from "react";

import "./UserAccount.scss";
import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import avatar from "../../assets/images/LogoPNG.png"
import pen from "../../assets/edit.svg"
import Pin from "../../assets/pin.svg"



const UserAccount = ({ onClose, data }) => {

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
                            <p className="name"  >{data?.name}</p>
                            <div className="line"></div>
                            <div className="dAT">
                                <p>{data?.position}</p>
                            </div>
                        </div>

                    </div>
                    <div className="fisrtAttribute">
                    </div>
                    <Display data={data}>Email</Display>
                    <CustomButton type='long' style={{ backgroundColor: color, borderRadius: '10px', width: '213px', fontSize: '21px', padding: '20px 0', alignSelf: 'end', marginTop: '38px' }}    >Change email</CustomButton>

                    <Display data={data}>Password</Display>
                    <CustomButton type='long' style={{ backgroundColor: color, borderRadius: '10px', width: '213px', fontSize: '21px', padding: '20px 0', alignSelf: 'end', marginTop: '38px' }}    >Change password</CustomButton>
                    <CustomButton type='long' style={{ backgroundColor: color, borderRadius: '10px', width: '213px', fontSize: '21px', padding: '20px 0', alignSelf: 'end', marginTop: '38px' }}    >Logout</CustomButton>

                </div>



            </div>
        </div>
    );
};

export default UserAccount;
