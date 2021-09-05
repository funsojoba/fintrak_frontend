import styled from "styled-components";

const Small = styled.small`
    color: #AF0000;
`

const ErrorMsg = ({children})=>{
    return <Small>{children}</Small>
}

export default ErrorMsg