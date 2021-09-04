import Img from "../img/img";

import { Link } from "react-router-dom";
import Button from "../button";

import {
    SideBarDiv, 
    SideLogo, 
    SideLogoSm, 
    SideLinkContainer, 
    SideIcon, SideLink, LogoutDiv,
    LogoutDivSmall} from './style'

const SideBar = () => {
    return <SideBarDiv>
        <Link to="/">
            <SideLogoSm>
                <Img alt="Fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388876/fintrak/FinLogoW_wr40ic.png" />
            </SideLogoSm>
        </Link>
        <Link to="/">
            <SideLogo>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629750175/fintrak/FinTrackWhite_kilzmt.png" alt="Fintrak" />
            </SideLogo>
        </Link>
       
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
        <LogoutDivSmall>
            <Button
                background="rgb(142, 42, 243)"
                color="#fff"
                padding="15px"
            ><i className="fas fa-power-off"></i></Button>
        </LogoutDivSmall>
        <LogoutDiv>
            <Button
                background="rgb(142, 42, 243)"
                width="100%"
                color="#fff"
            ><i className="fas fa-power-off"></i> &nbsp; Log Out</Button>
        </LogoutDiv>
    </SideBarDiv>
}

export default SideBar