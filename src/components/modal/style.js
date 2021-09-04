import styled from "styled-components";


export const MainBody = styled.div`
    width:100vw;
    height: 100%;
    padding:50px;
    background: rgba(28, 36, 108,.7);
    position:fixed;
    justify-content:center;
    align-items: center;
    top:0;
    left:0;
    display: ${props => props.display ? props.display : 'none'};
    z-index: 10;
`

export const Content = styled.div`
    position: relative;
    width: 70%;

    @media only screen and (max-width:750px){
        width: 100%;
    }
`

export const CloseBtn = styled.div`
    background: #DB0069;
    width:40px;
    height:40px;
    border:solid 3px #fff;
    border-radius:50%;
    position:absolute;
    top:-15px;
    right:-10px;
    cursor: pointer;
    transition: all ease-in 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    &:hover{
        transform: scale(1.01);
        transform:rotate(90deg)
    }
`