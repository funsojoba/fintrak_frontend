import styled from "styled-components";

export const Labeldiv = styled.label`
    display:block;
    text-align:left;
    color:#666;
`

const Label = ({children, labelFor})=>{
    return <Labeldiv labelFor={labelFor} >{children}</Labeldiv>
}

export default Label