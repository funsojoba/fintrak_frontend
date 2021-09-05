import ImageBox from "../../components/imageBox";
import Img from "../../components/img/img";

import H3 from "../../components/typography/h3";
import Box from "../../components/box";
import Input from "../../components/input";
import Button from "../../components/button";
import Small from "../../components/typography/small";
import ErrorMsg from "../../components/typography/errorMsg";
import validate from "./validate";
import login from "../../redux/action/auth/login";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Formik } from 'formik'
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import {Container, ContainerContent, FormDiv, Label, FormContent} from './style'

const LogIn = ({login, loginData}) => {
    return <Container>
        <ToastContainer/>
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
                <Formik
                    validationSchema={validate}
                    initialValues={{
                        email:"",
                        password:""
                    }}
                    onSubmit={async (values) => {
                        await login(values)
                    }}
                >
                    {({handleSubmit, handleChange, handleBlur, values, errors, touched})=>(

                    <FormDiv onSubmit={handleSubmit}> 
                        <FormContent>
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                width="100%" 
                                placeholder='johndoe@email.com' 
                                type='email' name='email'
                                value={values.email} />
                                <ErrorMsg>{touched.email && errors.email ? (errors.email) : (null)}</ErrorMsg>
                        </FormContent>
                        <FormContent>
                            <Label htmlFor="password">Pasword</Label>
                            <Input 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                width="100%" 
                                placeholder='**********' 
                                type='password' 
                                name='password'
                                value={values.password} />
                                <ErrorMsg>{touched.password && errors.password ? (errors.password) : (null)}</ErrorMsg>
                        </FormContent>
                        
                        <Small mb="10px"> <Link to="/forgot-password" >Forgot Password?</Link> </Small>
                        <FormContent>
                            <Button type="submit" width="100%" >Log in</Button>
                        </FormContent>
                        <Small align="center" color="#666" >Don't have an account? <Link to="/register">Register</Link></Small>
                    </FormDiv>
                    )}
                </Formik>
            </Box>
        </ContainerContent>

    </Container>
}

const mapStateToProps = (store)=> ({
    loginData:store.loginReducer
})

export default connect(mapStateToProps, {login})(LogIn)