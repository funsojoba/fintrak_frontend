import styled from "styled-components";


const H3Div = styled.h3`
    font-weight: bold;
    font-size:2em;
    color: ${props => props.color ? props.color : "#1C246D"};
    text-align: ${props => props.align ? props.align : 'left'};

    @media only screen and (max-width:750px){
        /* font-size:1em; */
    }
`

const H3 = ({ children, color, align }) => {
    return <H3Div color={color} align={align}>{children}</H3Div>
}

export default H3