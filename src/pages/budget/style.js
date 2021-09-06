import styled from "styled-components";

export const Container = styled.div`
    padding:30px;
    display:flex;

    @media only screen and (max-width:850px){
        padding:10px;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding:20px;
    scrollbar-width: none;
`

export const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width:850px){
        flex-direction:column;
    }
`

export const Badge = styled.div`
    background: ${props => props.background ? props.background : "#D7FFC5"};
    color:#000;
    padding:15px 20px;
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-radius:20px;
`
export const BadgeWrapper = styled.div`
    width: 100%;
`
export const TopNav = styled.div`
    display:flex;
    justify-content: space-between;

    @media only screen and (max-width:850px){
        flex-direction:column-reverse;
    }
`