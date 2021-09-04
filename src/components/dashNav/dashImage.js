import styled from "styled-components";
import { Link } from "react-router-dom";

const DasImgDiv = styled.div`
    a{
        width:50px;
        height: 50px;
        display:inline-block;
        border-radius: 50%;
        background:url(${props => props.background ? props.background : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388876/fintrak/FinProfile_no9nb1.png"});
        background-size:cover;
        background-position: center;
        border:2px solid #fff;
        box-shadow: 5px 5px 30px rgba(0,0,0,.1);
        transition:all ease-in 200ms;

        &:hover{
            transform: scale(1.12);
        }
    }
`

const DashImage = ({background})=>{
    return <DasImgDiv background={background}>
        <Link to="/settings" />
    </DasImgDiv>
}

export default DashImage