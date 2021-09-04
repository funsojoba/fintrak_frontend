import styled from "styled-components";

export const ButtonDiv = styled.button`
    border-radius: 10px;
    background: ${props => props.background ? props.background : "#1C246D"};
    color: ${props => props.color ? props.color : "#F6DC7D"};
    border: none;
    cursor: pointer;
    padding: ${props => props.padding ? props.padding : "15px 20px"};
    transition:all ease-in 300ms;
    width: ${props => props.width ? props.width : "auto"};

    &:hover{
        transform: translateX(5px);
    }
`