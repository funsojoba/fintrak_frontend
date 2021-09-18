import styled from "styled-components";
import H1 from "../../components/typography/h1";
import MyLink from "../../components/myLink/myLink";
import Paragraph from "../../components/typography/p";
import Img from "../../components/img/img";
import ImageBox from "../../components/imageBox";

import { connect } from "react-redux";

export const SectionOne = styled.div`
    background:#fff;
    padding:30px;
    display: flex;
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
    }

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

    @media only screen and (max-width:850px){
        width:90%;
        padding:20px;
    }
`


const SecOne = ({ loginData})=>{
    return <SectionOne>
        <SecOneFlex>
            <SecOneText>
                <H1>Track your income and expenses</H1>
                <Paragraph>Fintrak helps you keep track
                    of your income and expenditure
                    to make better financial decisions</Paragraph>
                <br></br>
                {loginData.token ? <MyLink to="/dashboard" >Dashboard</MyLink> : <MyLink to="/register" >Sign Up</MyLink>}
            </SecOneText>
        </SecOneFlex>

        <SecOneFlex>
            <ImageBox width="300px">
                <Img alt="Fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388905/fintrak/FinTrak_z1bzap.png" />
            </ImageBox>
        </SecOneFlex>
        <div className="curve">
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1630150497/fintrak/Vector_5_hgswb6.png" />
        </div>
    </SectionOne>
}

const mapStateToProps =(store)=>({
    loginData:store.loginReducer
})

export default connect(mapStateToProps)(SecOne)