import styled from "styled-components";

export const InputDiv = styled.input`
    border:none;
    background:#f5f5f5;
    color:#000;
    padding:10px 15px;
    border-radius: 10px;
    width: ${props => props.width ? props.width : 'auto'};
    outline: none;
`