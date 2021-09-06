import styled from "styled-components";


export const TableDiv  = styled.table`
    padding: 10px;
    width:100%;
    border:none;
    `

export const TheadDiv = styled.thead`
    padding:5px;
    background: #666;
    color:#fff;
    border-radius: 10px;
    margin-bottom: 10px;
    border-radius: 15px;
    width:100%;
    display: flex;
    justify-content: space-around;
    width:100%;
    `

export const TrDiv = styled.tr`
    padding:5px;
    background: #f5f5f5;
    color:#000;
    border-radius: 10px;
    margin-bottom: 5px;
    border-radius:15px;
    display: flex;
    justify-content: space-around;
    width:100%;
    align-items: center;

    &:hover{
        background:#EDEDED;
    }
`

export const TdDiv = styled.td`
    text-align:left;
    padding: 5px 10px;
    flex: 1;

    @media only screen and (max-width:750px){
        padding:5px;
        font-size:.75em;
    }
`
