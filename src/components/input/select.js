import styled from "styled-components";

export const SelectDiv = styled.select`
    background:none;
    border:none;
    color:#858585;
`


const Select = ({children})=>{
    return <SelectDiv>{children}</SelectDiv>
}

export default Select