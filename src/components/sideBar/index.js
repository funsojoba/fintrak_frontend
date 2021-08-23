import Img from "../img/img";

import {
    SideBarDiv, SideLogo, SideLogoSm, SideLinkContainer, SideLinkDiv, SideIcon, SideLink} from './style'

const SideBar = () => {
    return <SideBarDiv>
        <SideLogoSm>
            <Img alt="Fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388876/fintrak/FinLogoW_wr40ic.png" />
        </SideLogoSm>
        <SideLogo>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629750175/fintrak/FinTrackWhite_kilzmt.png" alt="Fintrak" />
        </SideLogo>
        <SideLinkContainer>
            <SideLinkDiv href="https://google.com" >
                <SideIcon>
                    <i className="fas fa-chart-pie"></i>
                </SideIcon>
                <SideLink>
                    <p >Dashboard</p>
                </SideLink>
            </SideLinkDiv>
            
            <SideLinkDiv href="https://google.com" >
                <SideIcon>
                    <i className="fas fa-hand-holding-usd"></i>
                </SideIcon>
                <SideLink>
                    <p >Income</p>
                </SideLink>
            </SideLinkDiv>
            
            <SideLinkDiv href="https://google.com" >
                <SideIcon>
                    <i className="fas fa-credit-card"></i>
                </SideIcon>
                <SideLink>
                    <p>Expense</p>
                </SideLink>
            </SideLinkDiv>
            
            <SideLinkDiv href="https://google.com" >
                <SideIcon>
                    <i className="fas fa-coins"></i>
                </SideIcon>
                <SideLink>
                    <p >Budget</p>
                </SideLink>
            </SideLinkDiv>
            
            <SideLinkDiv href="https://google.com" >
                <SideIcon>
                    <i class="fas fa-user-cog"></i>
                </SideIcon>
                <SideLink>
                    <p >Settings</p>
                </SideLink>
            </SideLinkDiv>

        </SideLinkContainer>
    </SideBarDiv>
}

export default SideBar