import styled from "styled-components";


const ParagraphDiv = styled.p`
    color: ${props => props.color ? props.color : "#1C246D"};
    text-align: ${props => props.align ? props.align : 'left'}

`

const Paragraph = ({ children, color, align }) => {
    return <ParagraphDiv color={color} align={align}>{children}</ParagraphDiv>
}

export default Paragraph