import styled from "styled-components";


const H5Div = styled.h5`
    font-weight: normal;
    font-size:1.5em;
    color: ${props => props.color ? props.color : "#1C246D"};
    text-align: ${props => props.align ? props.align : 'left'};

    @media only screen and (max-width:750px){
        font-size:1em;
    }
`

const H5 = ({ children, color, align }) => {
    return <H5Div color={color} align={align}>{children}</H5Div>
}

export default H5