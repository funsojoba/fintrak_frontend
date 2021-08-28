import styled from "styled-components";

export const SectionOne = styled.div`
    background:#fff;
    padding:30px;
    display: flex;
    justify-content: space-around;
    height: 70vh;
    position:relative;
    overflow: hidden;

    .curve{
        position:absolute;
        bottom: -10px;
        right: 0;
        width: 30%;

        @media only screen and (max-width:750px){
            width: 100%;
        }
        /* height:100px; */
    }

    @media only screen and (max-width:850px){
        flex-direction: column;
        height: auto;
    }
`

export const SecOneFlex = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const SecOneText = styled.div`
    padding:30px 50px;
    width:70%;

    @media only screen and (max-width:850px){
        width:90%
    }
`