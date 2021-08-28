import styled from "styled-components";

export const BoxDiv = styled.div`
    background:#fff;
    border-radius:20px;
    padding:30px;
    width: ${props => props.width ? props.width : 'auto'};
    flex: ${props => props.flex ? props.flex : 'auto'};
    position: relative;
    margin: ${props => props.margin ? props.margin : "auto"};

    @media only screen and (max-width:750px){
        padding:20px;
        border-radius: 15px;
    }
`