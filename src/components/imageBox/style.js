import styled, {keyframes} from "styled-components";


const fadeIn = keyframes`
    0%{
        transform: translateX(-200px);
        opacity: 0;
    }
    97%{
        transform: translateX(10px);
    }
    100%{
        opacity:1;
        transform:translateX(0)}
`

export const ImageBoxDiv = styled.div`
animation: ${fadeIn} 400ms;
    width: ${props => props.width ? props.width : '100%'};
`