import styled from "styled-components";

export const Container = styled.div`
    padding:30px;
    display:flex;
    @media only screen and (max-width:850px){
        padding:10px
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding:20px;
    scrollbar-width: none;
`

export const BodyDiv = styled.div`
    display:flex;

    @media only screen and (max-width:850px){
        flex-direction:column;
    }
`

export const ProfileImage = styled.div`
    width:150px;
    height:150px;
    border-radius:50%;
    background:url(${props => props.background ? props.background : "https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388876/fintrak/FinProfile_no9nb1.png"});
    background-position:center;
    background-size:cover;
    margin-bottom:15px;
`
export const ProfileImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`

export const ProfileForm = styled.form`
    padding:20px;
`
export const FormContent = styled.div`
    margin-bottom: 10px;
`

export const ChildDiv = styled.div`
    flex:1;

`