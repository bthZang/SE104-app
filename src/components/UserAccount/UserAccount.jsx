import { useState, ScrollY, useEffect } from "react";

import "./UserAccount.scss";
import CustomButton from "../CustomButton/CustomButton";
import Display from "../Display/Display";
import avatar from "../../assets/images/LogoPNG.png"
import pen from "../../assets/edit.svg"
import Pin from "../../assets/pin.svg"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API } from "../../constant/apiURL";



const UserAccount = ({ onClose, data }) => {
    const navigate = useNavigate()

    const [color, setColor] = useState('gray')
    const [attachment, setAttachment] = useState(null)
    const handleAttachment = (e) => {
        setAttachment(e.target.files[0])
        setColor('red')
    }

    const [userData, setUserData] = useState({})
    const id = localStorage.getItem('id')
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        (async () => {
            if (!id) return;
            const response = await axios.get(`${USER_API}`, {
                params: {
                    id
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            setUserData(response.data)
        })()
    }, [])

    return (
        <div className="containerUserAccount" onClick={onClose} >
            <div className="boxUserAccount" onClick={e => e.stopPropagation()}>
                <div className="firstColumn">
                    <p className="name"  >{userData?.name}</p>

                    <div className="titleDisplay" >
                        <div className="imgDisplay"><img src={avatar} style={{ width: '160px', height: '160px' }} /></div>

                        <div className="textDisplay">
                            <div className="title"> {userData?.userRole} </div>
                            <div className="line"></div>
                            <div className="dAT">{'Manager'}
                            </div>
                        </div>

                    </div>
                    <div className="fisrtAttribute">
                    </div>
                    <Display data={userData?.email}>Email</Display>
                    {/* <CustomButton type='long' style={{ borderRadius: '11px', width: '513px', fontSize: '21px', marginBottom: '60px', padding: '12px 0', alignSelf: 'center', }}    >Change email</CustomButton> */}

                    <Display data='*******'>Password</Display>
                    {/* <CustomButton type='long' style={{ borderRadius: '11px', width: '513px', fontSize: '21px', padding: '12px 0', alignSelf: 'center' }}    >Change password</CustomButton> */}
                    <CustomButton type='long' style={{}} onClick={() => {
                        // localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    }>Logout</CustomButton>
                    <p>.........</p>

                </div>



            </div>
        </div>
    );
};

export default UserAccount;
