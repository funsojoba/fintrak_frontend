import styled from "styled-components";

export const Container = styled.div`
    padding:30px;
    display:flex;

    @media only screen and (max-width:850px){
        padding:10px
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    scrollbar-width: none;
`

export const DashDiv = styled.div`
    display: flex;
    flex:1;
    width:${props => props.width ? props.width : "auto"};
    padding:30px;
    justify-content: space-around;
    flex-wrap: wrap;

    @media only screen and (max-width:850px){
        padding:20px;
        flex-direction:column;
    }
`

export const DashBoxDiv = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const Select = styled.select`
    background:none;
    border:none;
    color:#858585;
`

export const TransactionCard = styled.div`
    background: ${props => props.background ? props.background : "#EEFFF0"};
    padding:10px 15px;
    border-radius: 10px;
    margin-bottom: 10px;
`