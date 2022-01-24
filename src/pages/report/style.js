import styled, {css} from "styled-components";


export const Body = styled.div`
    padding:30px;
    display:flex;
    @media only screen and (max-width:850px){
        padding:10px;
    }
`
export const Container = styled.div`
    padding:10px;
    width:100%;
    position:relative;
    height:100vh;
    overflow:scroll;
`

export const Flex = styled.div`
    display: flex;
    padding: ${props => props.padding ? props.padding : '10px'};
    justify-content: ${props => props.justify ? props.justify : 'auto'};
    align-items: ${props => props.align ? props.align : 'center'}
    ${({column})=> column && css`
        flex-direction:column;
    `}
`

export const Headers = styled.div`
    padding: 10px 15px;
    margin: 10px auto;
    text-align:center;
    border-radius:10px;
    background: #1C246D;
    `
    
export const TabDiv = styled.div`
    display:flex;
    width:100%;
    background: #D7DCFF;
    border-radius:10px;
    cursor:pointer;
    overflow:hidden;
    margin-bottom:20px;
    color:#232E8D;
    
    .active{
        background:#232E8D;
        color:#fff;
    }
    `
    
export const TabDivChild = styled.div`
    padding: 15px;
    flex:1;
`