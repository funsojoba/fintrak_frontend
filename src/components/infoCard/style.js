import styled from "styled-components";


export const InfoCardDiv = styled.div`
    padding:20px;
    position: relative;
    border-radius: 20px;
    width: 250px;
    background: ${props => props.background ? props.background : '#DDEFE0'};
    margin:10px;

    @media only screen and (max-width:850px){
        width:400px
    }
    @media only screen and (max-width:450px){
        width:90%
    }
`

export const CardIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`