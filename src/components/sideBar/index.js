import Img from "../img/img";

import { Link } from "react-router-dom";

import {
    SideBarDiv, SideLogo, SideLogoSm, SideLinkContainer, SideIcon, SideLink} from './style'

const SideBar = () => {
    return <SideBarDiv>
        <SideLogoSm>
            <Img alt="Fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388876/fintrak/FinLogoW_wr40ic.png" />
        </SideLogoSm>
        <SideLogo>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629750175/fintrak/FinTrackWhite_kilzmt.png" alt="Fintrak" />
        </SideLogo>
       
        <SideLinkContainer>
            <Link to="/dashboard" >
                <SideIcon>
                    <i className="fas fa-chart-pie"></i>
                </SideIcon>
                <SideLink>
                    <p >Dashboard</p>
                </SideLink>
            </Link>
            
            <Link to="/income" >
                <SideIcon>
                    <i className="fas fa-hand-holding-usd"></i>
                </SideIcon>
                <SideLink>
                    <p >Income</p>
                </SideLink>
            </Link>
            
            <Link to="/expense" >
                <SideIcon>
                    <i className="fas fa-credit-card"></i>
                </SideIcon>
                <SideLink>
                    <p>Expense</p>
                </SideLink>
            </Link>
            
            <Link to="/budget" >
                <SideIcon>
                    <i className="fas fa-coins"></i>
                </SideIcon>
                <SideLink>
                    <p >Budget</p>
                </SideLink>
            </Link>
            
            <Link to="/settings" >
                <SideIcon>
                    <i class="fas fa-user-cog"></i>
                </SideIcon>
                <SideLink>
                    <p >Settings</p>
                </SideLink>
            </Link>

        </SideLinkContainer>
    </SideBarDiv>
}

export default SideBar