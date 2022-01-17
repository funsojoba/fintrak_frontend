import styled, {css} from "styled-components";



export const Body = styled.div`
    padding:30px;
    display:flex;
    @media only screen and (max-width:850px){
        padding:10px;
    }
`
export const Container = styled.div`
    display:flex;
    align-items: ${props => props.align ? props.align : 'center'}
    justify-content: ${props => props.justify ? props.justify : 'center'};
    @media only screen and (max-width:850px){
        flex-direction:column-reverse;
    }
`

export const Flex = styled.div`
    display: flex;
    padding: ${props => props.padding ? props.padding : '10px'};
    ${({column})=> column && css`
        flex-direction:column;
    `}
    justify-content: ${props => props.justify ? props.justify : 'auto'};
    align-items: ${props => props.align ? props.align : 'center'}
`

export const Headers = styled.div`
    padding: 15px;
    margin-top: 10px;
    margin-bottom:10px;
    text-align:center;
    border-radius:10px;
    background: #1C246D;
`