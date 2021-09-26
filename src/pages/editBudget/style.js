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
    a{
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-radius: 20px;
        background:#F5F5F5;
        color: #000;
        margin-top: 5px;
        margin-bottom:5px;
        align-items: center;
        text-decoration: none;
        transition: all  200ms ease-in;

        &:hover{
            transform: scaleX(1.02)
        }
    }
`