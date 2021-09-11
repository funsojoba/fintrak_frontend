import styled from "styled-components";
import { Field } from "formik";

export const SelectDiv = styled.div`
    select{
        background:${props => props.background ? props.background : 'none'};
        border:${props => props.border ? props.border : "none"};
        color:#858585;
        width: ${props => props.width ? props.width : "auto"};
        border-radius: 15px;
        padding: ${props => props.padding ? props.padding : "none"};
    }
`


const Select = ({width, border, padding, name, value, background, options})=>{
    return <SelectDiv width={width}
        border={border}
        padding={padding}
        background={background}>
            <Field
                as="select" 
                id={name}
                value={value}
                name={name}
                >
            {options.map(option =>{
                return (
                    <option key={option.value} value={option.value}>{option.value}</option>
                )
            })}
            </Field>
        </SelectDiv>
}

export default Select