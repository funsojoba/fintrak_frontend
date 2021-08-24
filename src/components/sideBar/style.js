import styled from "styled-components";

export const SideBarDiv = styled.div`
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

export const SideLogo = styled.div`
    width:100%;
    margin-bottom: 60px;
    @media only screen and (max-width:750px){
        display:none;
    }
    `

export const SideLogoSm = styled.div`
    display: none;
    width:30px;
    margin:30px auto 60px;
    @media only screen and (max-width:750px){
        display:block;
    }

`

export const SideLinkContainer = styled.div`
    @media only screen and (max-width:750px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`


export const SideLinkDiv = styled.a`
    display: flex;
    color:#fff;
    align-items: center;
    text-decoration:none;
    position:relative;
    transition: all 200ms ease-in;
    margin-bottom: 20px;
    
    &:hover{
        transform: translateX(10px);
    }
    
    &:hover::after{
        opacity:1;
        transform: translateX(-10px);
    }
    
    &::after{
        opacity:0;
        content:"";
        position:absolute;
        width:10px;
        height: 10px;
        background:rgb(154, 42, 243);
        border-radius: 50%;
        transition: all 300ms ease-in;
    }
`
export const SideIcon = styled.div`
    padding:5px;
    
    @media only screen and (max-width:750px){
        .fas{
            font-size: 1.5em;
        }
    }
`
export const SideLink = styled.div`
    padding: 5px;

    @media only screen and (max-width:750px){
        display:none;
    }

`