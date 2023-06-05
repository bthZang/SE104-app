
import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import backBtn from '../../assets/back-button.svg'
import "./LoginPage.scss"

export default function LoginPage() {

    return (
        <div className="containerLoginPage">
            <div className="loginOutlet">
                <div className="headerLoginPage">
                    <img className="logoLoginPage" src={logo} />
                </div>
                <div className="backLoginPage">
                    <img className="backButtonLoginpage" src={backBtn} />
                </div>
                <Outlet />
            </div>
            <div className="decorContainerLoginPage">

            </div>
        </div>
    )
}