import styled, {css} from "styled-components";


export const Container = styled.div`
    padding:30px;
    display:flex;

    @media only screen and (max-width:850px){
        padding:10px
    }
`

export const Flex = styled.div`
    display: flex;
    padding: ${props => props.padding ? props.padding : '10px'};
    ${({column})=> column && css`
        flex-direction:column;
    `}
`