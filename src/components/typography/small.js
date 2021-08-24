import styled from "styled-components";

const SmallDiv = styled.small`
    color: ${props => props.color ? props.color : '#000'};
    text-align: ${props => props.align ? props.align : 'left'};
    margin-bottom: ${props => props.mb ? props.mb : '0'};
    display:inline-block;
`


const Small = ({ children, color, align, mb }) => {
    return <SmallDiv
        color={color}
        align={align}
        mb={mb}
    >{children}</SmallDiv>
}

export default Small