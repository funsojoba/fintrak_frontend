import styled from "styled-components";

import H1 from "../../components/typography/h1";
import MyLink from "../../components/myLink/myLink";
import ImageBox from "../../components/imageBox";
import Img from "../../components/img/img";

export const SectionTwo = styled.div`
    background:#D8E2FF;
    padding:30px;
    display: flex;
    justify-content: space-around;
    height: 70vh;
    position:relative;
    overflow: hidden;

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
        width:90%;
        padding:20px;
    }
`


const SecTwo = ()=>{
    return <SectionTwo>
        <SecOneFlex>
            <SecOneText>
                <H1>Get report on all your transactions</H1>
                <br></br>
                <MyLink to="/register">Get started</MyLink>
            </SecOneText>
        </SecOneFlex>

        <SecOneFlex>
            <ImageBox>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388981/fintrak/Dashes_llnwzo.png" />
            </ImageBox>

        </SecOneFlex>
    </SectionTwo>
}

export default SecTwo