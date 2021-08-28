import styled from "styled-components";

import H1 from "../../components/typography/h1";
import MyLink from "../../components/myLink/myLink";
import ImageBox from "../../components/imageBox";
import Img from "../../components/img/img";
import Paragraph from "../../components/typography/p";

export const SectionTwo = styled.div`
    background:#fff;
    padding:30px;
    display: flex;
    justify-content: space-around;
    height: 70vh;
    position:relative;
    overflow: hidden;

    @media only screen and (max-width:850px){
        flex-direction: column;
        height: auto;
        padding:20px;
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


const SecThree = ()=>{
    return <SectionTwo>
        <SecOneFlex>
            <ImageBox>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1630154736/fintrak/graph_hkfplw.png" />
            </ImageBox>

        </SecOneFlex>

        <SecOneFlex>
            <SecOneText>
                <H1>Make plans for the month</H1>
                <br></br>
                <Paragraph>Write a budget for the month, and
                    let’s see how you stick with it</Paragraph>
                <br></br>
                <MyLink to="/register">Get started</MyLink>
            </SecOneText>
        </SecOneFlex>
        
    </SectionTwo>
}

export default SecThree