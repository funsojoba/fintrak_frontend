import styled from "styled-components";
import MyLink from "../myLink/myLink";

import { connect } from "react-redux";
import { useEffect } from "react";
import fetchUser from "../../redux/action/user";

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
        position: relative;
        cursor:pointer;
    
        &:hover{
            transform: scale(1.12);
        }
    }
`

const DashImage = ({ background, userData, fetchUser }) => {
    useEffect(()=>{
        fetchUser()
    }, [fetchUser])
    return <DasImgDiv background={userData.data ? userData.data.user.avatar : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388876/fintrak/FinProfile_no9nb1.png"}>
        <MyLink to="/settings">
        </MyLink>
    </DasImgDiv>
}

const mapStateToProps = store => ({
    userData: store.userReducer
})

export default connect(mapStateToProps, { fetchUser })(DashImage)