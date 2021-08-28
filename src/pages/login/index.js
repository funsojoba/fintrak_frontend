import ImageBox from "../../components/imageBox";
import Img from "../../components/img/img";

import H3 from "../../components/typography/h3";
import Box from "../../components/box";
import Input from "../../components/input";
import Button from "../../components/button";
import Small from "../../components/typography/small";

import { Link } from "react-router-dom";

import {Container, ContainerContent, FormDiv, Label} from './style'

const LogIn = () => {
    return <Container>
        <ContainerContent
            smDisplay="none"
            background='https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629801805/fintrak/login_cpuikt.png'
        >
            <ImageBox width='100px'>
                <Link to="/">
                    <Img alt="fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388876/fintrak/FinLogoW_wr40ic.png" />
                </Link>
            </ImageBox>
        </ContainerContent>

        <ContainerContent>
            <Box>
                <H3 align="center">Log in to your account</H3>
                <FormDiv>
                 
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input width="100%" placeholder='johndoe@email.com' type='email' name='email' mb="20px" />
                    </div>
                    <div>
                        <Label htmlFor="password">Pasword</Label>
                        <Input width="100%" placeholder='**********' type='password' name='password' mb="20px" />
                    </div>
                    
                    <Small mb="10px"> <Link to="/forgot-password" >Forgot Password?</Link> </Small>
                    <div>
                        <Button width="100%" >Log in</Button>
                    </div>
                    <Small align="center" color="#666" >Don't have an account? <Link to="/register">Register</Link></Small>
                </FormDiv>
            </Box>
        </ContainerContent>

    </Container>
}

export default LogIn