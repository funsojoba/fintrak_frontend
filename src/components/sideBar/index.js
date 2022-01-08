import Img from "../img/img";

import { Link } from "react-router-dom";
import Button from "../button";

// import { Redirect } from "react-router-dom";

import {
    SideBarDiv, 
    SideLogo, 
    SideLogoSm, 
    SideLinkContainer, 
    SideIcon, SideLink, LogoutDiv,
    LogoutDivSmall} from './style'

const SideBar = () => {

    const pathName = window.location.pathname
    const logOut = () => {
        localStorage.clear()
        console.log('loggin out...')
        window.location = "/";
    }
    return <SideBarDiv>
        <Link to="/">
            <SideLogoSm>
                <Img alt="Fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1633035942/fintrak/White_Logo_t0nkfu.svg" />
            </SideLogoSm>
        </Link>
        <Link to="/">
            <SideLogo>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1633035942/fintrak/White_long_Logo_dtql0g.svg" alt="Fintrak" />
            </SideLogo>
        </Link>
       
        <SideLinkContainer>
            <Link to="/dashboard" className={pathName === "/dashboard" && 'active'} >
                <SideIcon>
                    <i className="fas fa-chart-pie"></i>
                </SideIcon>
                <SideLink>
                    <p >Dashboard</p>
                </SideLink>
            </Link>
            
            <Link to="/income"  className={pathName === "/income" && 'active'}  >
                <SideIcon>
                    <i className="fas fa-hand-holding-usd"></i>
                </SideIcon>
                <SideLink>
                    <p >Income</p>
                </SideLink>
            </Link>
            
            <Link to="/expense"   className={pathName === "/expense" && 'active'}   >
                <SideIcon>
                    <i className="fas fa-credit-card"></i>
                </SideIcon>
                <SideLink>
                    <p>Expense</p>
                </SideLink>
            </Link>
            
            <Link to="/budget"   className={pathName === "/budget" && 'active'}  >
                <SideIcon>
                    <i className="fas fa-coins"></i>
                </SideIcon>
                <SideLink>
                    <p >Budget</p>
                </SideLink>
            </Link>
            
            <Link to="/settings" className={pathName === "/settings" && 'active'} >
                <SideIcon>
                    <i className="fas fa-user-cog"></i>
                </SideIcon>
                <SideLink>
                    <p >Settings</p>
                </SideLink>
            </Link>

        </SideLinkContainer>
        <LogoutDivSmall>
            <Button
                onClick={logOut}
                background="rgb(142, 42, 243)"
                color="#fff"
                padding="15px"
            ><i className="fas fa-power-off"></i></Button>
        </LogoutDivSmall>
        
        <LogoutDiv>
            <Button
                onClick={logOut}
                background="rgb(142, 42, 243)"
                width="100%"
                color="#fff"
            ><i className="fas fa-power-off"></i> &nbsp; Log Out</Button>
        </LogoutDiv>
    </SideBarDiv>
}

export default SideBar