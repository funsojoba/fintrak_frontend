import ImageBox from "../../components/imageBox";
import Img from "../../components/img/img";

import H3 from "../../components/typography/h3";
import Box from "../../components/box";
import Input from "../../components/input";
import Button from "../../components/button";
import Small from "../../components/typography/small";

import { Link } from "react-router-dom";
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";

import forgotPassword from "../../redux/action/auth/forgotPassword";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, ContainerContent, FormDiv, Label } from "./style";

const ForgotPassword = () => {
    let [emailState, setEmailState] = useState('')
    const forgotPasswordData = useSelector(state => state.forgotPasswordReducer)
    const dispatch = useDispatch()

    const handleChange = e =>{
        setEmailState(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(forgotPassword({email:emailState}))
    }

  return (
    <Container>
    <ToastContainer />
      <ContainerContent
        smDisplay="none"
        background="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1630146439/fintrak/Fogot_password_hjwad3.png">
        <ImageBox width="100px">
          <Link to="/">
            <Img
              alt="fintrak"
              src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1633035942/fintrak/White_Logo_t0nkfu.svg"
            />
          </Link>
        </ImageBox>
      </ContainerContent>

      <ContainerContent>
        <Box>
          <H3 align="center">Enter email to reset password</H3>
          <FormDiv onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={e=>handleChange(e)}
                width="100%"
                placeholder="johndoe@email.com"
                type="email"
                name="email"
                mb="20px"
              />
            </div>
            <div>
              <Button width="100%" isLoading={forgotPasswordData.isLoading}>Send</Button>
            </div>
            <Small align="center" color="#666">
              Don't have an account? <Link to="/register">Register</Link>{" "}
            </Small>
          </FormDiv>
        </Box>
      </ContainerContent>
    </Container>
  );
};

export default ForgotPassword;
