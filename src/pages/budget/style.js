import styled from "styled-components";

export const Container = styled.div`
    padding:30px;
    display:flex;
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding:20px;
`

export const FlexDiv = styled.div`
    display: flex;
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
`