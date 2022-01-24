import styled from "styled-components";
import H1 from "../../components/typography/h1";
import MyLink from "../../components/myLink/myLink";
import Paragraph from "../../components/typography/p";
import Img from "../../components/img/img";
import ImageBox from "../../components/imageBox";
import ScrollAnimation from 'react-animate-on-scroll';

import { connect } from "react-redux";

export const SectionOne = styled.div`
    background:#fff;
    padding:30px;
    display: flex;
    height: 70vh;
    position:relative;
    overflow: hidden;

    @media only screen and (max-width:850px){
        flex-direction: column;
        height: auto;
        padding:20px;
    }
`

// const slideIn = keyframes`
//     0%{
//         transform: translateX(200px);
//         opacity: 0;
//     }
//     97%{
//         transform: translateX(-10px);
//     }
//     100%{
//         opacity:1;
//         transform:translateX(0)}
// `



export const SecOneFlex = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const SecOneText = styled.div`
    padding:30px 50px;

    @media only screen and (max-width:850px){
        width:90%;
        padding:20px;
    }
`


const SecOne = ({loginData})=>{
    return <SectionOne>
        <SecOneFlex>
            <SecOneText>
            <ScrollAnimation animateIn="fadeInRight"  animateOut='fadeOut'>
                <H1>Track your income and expenses</H1>
                <Paragraph>Fintrak helps you keep track
                    of your income and expenditure
                    to make better financial decisions</Paragraph>
                <br></br>
                {loginData.token ? <MyLink to="/dashboard" >Dashboard</MyLink> : <MyLink to="/register" >Sign Up</MyLink>}
            </ScrollAnimation>
            </SecOneText>
        </SecOneFlex>

        <SecOneFlex>
            <ScrollAnimation animateIn='fadeIn'  animateOut='fadeOut'>
                <ImageBox width="300px">
                    <Img alt="Fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388905/fintrak/FinTrak_z1bzap.png" />
                </ImageBox>
            </ScrollAnimation>
        </SecOneFlex>
    </SectionOne>
}

const mapStateToProps =(store)=>({
    loginData:store.loginReducer
})

export default connect(mapStateToProps)(SecOne)