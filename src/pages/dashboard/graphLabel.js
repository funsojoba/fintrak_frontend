import styled from "styled-components";

export const LabelDiv = styled.div`
    display: flex;
    padding:10px;
    justify-content: space-around;
    align-items: center;
`

export const Circle = styled.div`
    background: ${props => props.background ? props.background : ""};
    width:20px;
    height:20px;
    border-radius: 50%;
    display: inline;
`
