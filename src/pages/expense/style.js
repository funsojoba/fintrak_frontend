import styled from "styled-components";

export const Container = styled.div`
    padding:30px;
    display:flex;

    @media only screen and (max-width:850px){
        padding:10px
    }
`

export const TopDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    `

export const Div = styled.div`
    display:flex;
    flex-wrap:wrap;

    @media only screen and (max-width:850px){
        flex-direction:column;
    }
    `

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding:20px;
    scrollbar-width: none;
    `

export const TopNav = styled.div`
    display:flex;
    justify-content: space-between;
    @media only screen and (max-width:850px){
        flex-direction:column-reverse;
    }
`

export const FormContent = styled.div`
    padding:15px;
    margin-bottom: 7.5px;;
`