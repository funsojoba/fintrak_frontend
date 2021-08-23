import styled from "styled-components";

import Img from "../img/img";


const SideBarDiv = styled.div`
    width:250px;
    background: #1C246D;
    border-radius: 30px;
    height: 100vh;
    padding:40px;
    color:#fff;
    box-sizing: border-box;
    @media only screen and (max-width:750px){
        width:70px;
        padding:5px;
        border-radius:15px;
    }
`

const SideLogo = styled.div`
    width:100%;
    margin-bottom: 60px;
    @media only screen and (max-width:750px){
        display:none;
    }
    `

const SideLogoSm = styled.div`
    display: none;
    width:30px;
    margin:30px auto 60px;
    @media only screen and (max-width:750px){
        display:block;
    }

`

const SideLinkContainer = styled.div`
    @media only screen and (max-width:750px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`


const SideLinkDiv = styled.a`
    display: flex;
    color:#fff;
    align-items: center;
    text-decoration:none;
`
const SideIcon = styled.div`
    padding:5px;
    
    @media only screen and (max-width:750px){
        margin-bottom: 20px;
        .fas{
            font-size: 1.5em;
        }
    }
`
const SideLink = styled.div`
    padding: 5px;

    @media only screen and (max-width:750px){
        display:none;
    }

`

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