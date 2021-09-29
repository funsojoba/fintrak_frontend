import styled from "styled-components";

export const Container = styled.div`
    padding:30px;
    display:flex;

    @media only screen and (max-width:850px){
        padding: 10px;
    }
`
export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding:20px;
`

export const FlexDiv = styled.div`
    display:flex;

    @media only screen and (max-width:850px){
        flex-direction:column;
    }
`
export const FormContent = styled.div`
    margin-bottom: 10px;;
`

export const ListDiv = styled.div`
    padding: 15px;
    border-radius: 20px;
    background:#F5F5F5;
    color: #000;
    margin-top: 5px;
    margin-bottom:5px;
    text-decoration: none;
    transition: all  200ms ease-in;
    position:relative;

    &:hover{
        transform: scaleX(1.02);
        background: #f7f7f7;
    }
`

export const TrashIcon = styled.div`
    width:30px;
    height:30px;
    background:#fff;
    color:#DB0069;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    right:-10px;
    transition: all 200ms ease-in;
    cursor:pointer;
    &:hover{
        box-shadow: 5px 5px 30px rgba(0,0,0,.24)
    }
`