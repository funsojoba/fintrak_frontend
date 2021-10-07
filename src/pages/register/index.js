import ImageBox from "../../components/imageBox";
import Img from "../../components/img/img";

import H3 from "../../components/typography/h3";
import Box from "../../components/box";
import Input from "../../components/input";
import Button from "../../components/button";
import Small from "../../components/typography/small";
import ErrorMsg from "../../components/typography/errorMsg"

// import BarLoader from 'react-spinners/BarLoader'
import Loader from 'react-spinners/SyncLoader'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux'
import { Formik } from 'formik'
import validate from "./validate";
import { Link } from "react-router-dom";

import register from "../../redux/action/auth/register";

import { Container, ContainerContent, FormDiv, Label, FormContent } from './style'

const Register = ({register, registerData}) => {
    return <Container>
        <ToastContainer />
        <ContainerContent
            smDisplay="none"
            background='https://res.cloudinary.com/ddl2pf4qh/image/upload/v1629801807/fintrak/register_mknghq.png'
        >
            <ImageBox width='100px'>
                <Link to="/">
                    <Img alt="fintrak" src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1633035942/fintrak/White_Logo_t0nkfu.svg" />
                </Link></ImageBox>
        </ContainerContent>

        <ContainerContent>
            <Box>
                <H3 align="center">Create an account</H3>
                <Formik
                    validationSchema={validate}
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: '',
                        password: '',
                        confirm_password: ''
                    }}
                    onSubmit={
                        async (values)=>{
                            await register(values)
                        }
                    }
                >
                    {({ handleSubmit, handleBlur, handleChange, touched, errors, values }) => (
                        <FormDiv onSubmit={handleSubmit}>
                            <FormContent>
                                <Label htmlFor="first_name">First Name</Label>
                                <Input
                                    width="100%"
                                    placeholder='John'
                                    type='text'
                                    name='first_name'
                                    onBlur={handleBlur}
                                    onChange={handleChange} />
                                <ErrorMsg>{touched.first_name && errors.first_name ? errors.first_name : null}</ErrorMsg>
                            </FormContent>
                            <FormContent>
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input
                                    width="100%"
                                    placeholder='Doe'
                                    type='text'
                                    name='last_name'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMsg>{touched.last_name && errors.last_name ? errors.last_name : null}</ErrorMsg>
                            </FormContent>
                            <FormContent>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    width="100%"
                                    placeholder='johndoe@email.com'
                                    type='email'
                                    name='email'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMsg>{touched.email && errors.email ? errors.email : null}</ErrorMsg>
                            </FormContent>
                            <FormContent>
                                <Label htmlFor="password">Pasword</Label>
                                <Input
                                    width="100%"
                                    placeholder='**********'
                                    type='password'
                                    name='password'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMsg>{touched.password && errors.password ? errors.password : null}</ErrorMsg>
                            </FormContent>
                            <FormContent>
                                <Label htmlFor="confirm_password">Confirm Password</Label>
                                <Input
                                    width="100%"
                                    placeholder='*********'
                                    type='password'
                                    name='confirm_password'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMsg>{touched.confirm_password && errors.confirm_password ? errors.confirm_password : null}</ErrorMsg>
                            </FormContent>

                            <FormContent>
                                {registerData && registerData.loading ? <Button width="100%" type="submit"><Loader size="10px" color="#F4ECDD" /></Button> : <Button width="100%" type="submit" >Register</Button>}
                            </FormContent>
                            <Small align="center" color="#666" >Already have an account? <Link to='/login'>Log In</Link></Small>
                        </FormDiv>
                    )}
                </Formik>
            </Box>
        </ContainerContent>

    </Container>
}

const mapStateToProps = (store) => ({
    registerData: store.registerReducer
})

export default connect(mapStateToProps, { register })(Register)