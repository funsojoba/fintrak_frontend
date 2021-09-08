import styled from "styled-components";

export const SelectDiv = styled.select`
    background:${props => props.background ? props.background : 'none'};
    border:${props => props.border ? props.border : "none"};
    color:#858585;
    width: ${props => props.width ? props.width : "auto"};
    border-radius: 15px;
    padding: ${props => props.padding ? props.padding : "none"};
`


const Select = ({children, width, border, padding, name, value, background})=>{
    return <SelectDiv 
        width={width} 
        border={border} 
        padding={padding}
        value={value}
        name={name}
        background={background}>{children}</SelectDiv>
}

export default Select