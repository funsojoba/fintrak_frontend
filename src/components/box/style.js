import styled, { css } from "styled-components";

export const BoxDiv = styled.div`
    background: ${props => props.background ? props.background : "#fff"};
    border-radius:20px;
    padding:30px;
    width: ${props => props.width ? props.width : 'auto'};
    flex: ${props => props.flex ? props.flex : 'auto'};
    flex-wrap:wrap;
    position: relative;
    margin: ${props => props.margin ? props.margin : "auto"};
    overflow:scroll;

    ${({ displayFlex }) => displayFlex && css`
        display:flex;
        justify-content:center;
        align-items:center;
    `};
    
    ${({ flexStart }) => flexStart && css`
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
    `};
    ${({ flexOnly }) => flexOnly && css`
        display:flex;
    `};
    ${({ flexBetween }) => flexBetween && css`
        display:flex;
        justify-content: space-between;
        align-items: center;
    `};


    @media only screen and (max-width:750px){
        padding:20px;
        border-radius: 15px;
        width:400px;
    }
    @media only screen and (max-width:450px){
        width:300px;
        padding:10px;
        margin-bottom: 15px;
    }

    
`