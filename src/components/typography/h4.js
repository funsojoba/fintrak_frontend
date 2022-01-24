import styled from "styled-components";


const H4Div = styled.h4`
    font-weight: bold;
    font-size:1.5em;
    color: ${props => props.color ? props.color : "#1C246D"};
    text-align: ${props => props.align ? props.align : 'left'};

`

const H4 = ({ children, color, align }) => {
    return <H4Div color={color} align={align}>{children}</H4Div>
}

export default H4