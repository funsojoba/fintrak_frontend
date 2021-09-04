import styled from "styled-components";

export const Container = styled.div`
    position:absolute;
    right: 50px;
    top:0;
    transform-origin:top right;
    transform: scale(${props => props.show ? props.show : '0'});
    transition:all ease-in 200ms;
    z-index: 5;
`

export const Div = styled.div`
    width:160px;
    border-radius:20px;
    background:#fff;
    box-shadow: 0 6px 23px rgba(0,0,0,.06);
    padding:15px;
    position: relative;

    a{
        color:#1C246D;
        display:inline-block;
        padding:5px 10px;
        text-decoration:none;
        position:relative;
        overflow: hidden;
        
        &:after{
            content:"";
            position:absolute;
            left:0;
            bottom:0;
            width:0;
            height:5%;
            background:#1C246D;
            transition:all ease-in-out 200ms;
        }

        &:hover::after{
            width:100%;
        }
    }
`

export const Talk = styled.div`
    clip-path: polygon(0 0, 0% 100%, 100% 43%);
    background:#fff;
    width:50px;
    height:30px;
    position:absolute;
    top:0;
    right:-15px;
`

