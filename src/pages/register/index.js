import ImageBox from "../../components/imageBox";
import Img from "../../components/img/img";

import H3 from "../../components/typography/h3";
import Box from "../../components/box";
import Input from "../../components/input";
import Button from "../../components/button";
import Small from "../../components/typography/small";

import { Link } from "react-router-dom";

import {Container, ContainerContent, FormDiv, Label} from './style'

const Register = () => {
    return <Container>
        <ContainerContent
            smDisplay="none"
            background='https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629801807/fintrak/register_mknghq.png'
        >
            <ImageBox width='100px'>
                <Link to="/">
                    <Img alt="fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629388876/fintrak/FinLogoW_wr40ic.png" />
                </Link></ImageBox>
        </ContainerContent>

        <ContainerContent>
            <Box>
                <H3 align="center">Create an account</H3>
                <FormDiv>
                    <div>
                        <Label htmlFor="first_name">First Name</Label>
                        <Input width="100%" placeholder='John' type='text' name='first_name' mb="20px" />
                    </div>
                    <div>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input width="100%" placeholder='Doe' type='text' name='last_name' mb="20px" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input width="100%" placeholder='johndoe@email.com' type='email' name='email' mb="20px" />
                    </div>
                    <div>
                        <Label htmlFor="password">Pasword</Label>
                        <Input width="100%" placeholder='**********' type='password' name='password' mb="20px" />
                    </div>
                    <div>
                        <Label htmlFor="confirm_password">Confirm Password</Label>
                        <Input width="100%" placeholder='*********' type='password' name='confirm_password' mb="20px" />
                    </div>
                    
                    <div>
                        <Button width="100%" >Register</Button>
                    </div>
                    <Small align="center" color="#666" >Already have an account? <Link to='/login'>Log In</Link></Small>
                </FormDiv>
            </Box>
        </ContainerContent>

    </Container>
}

export default Register