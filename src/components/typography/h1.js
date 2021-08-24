import styled from "styled-components";


const H1Div = styled.h1`
    font-weight: 700;
    font-size:3em;
    color: ${props => props.color ? props.color : "#1C246D"};
    text-align: ${props => props.align ? props.align : 'left'};

    @media only screen and (max-width:750px){
        font-size:2em;
    }
`

const H1 = ({ children, color, align})=>{
    return <H1Div color={color} align={align}>{children}</H1Div>
}

export default H1