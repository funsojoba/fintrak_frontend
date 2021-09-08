import Box from "../../components/box"
import Input from "../../components/input";
import Button from "../../components/button";
import ErrorMsg from "../../components/typography/errorMsg";
import Label from "../../components/typography/label";
import { useLocation } from "react-router-dom";
import verifyAccount from "../../redux/action/auth/verifyAccount";

import validate from "./validate";

import Loader from 'react-spinners/SyncLoader'
import { Formik } from "formik";
import { ToastContainer } from "react-toastify";

import { useDispatch, useSelector } from 'react-redux'
import { Container, Content, BoxDiv, FormContent } from "./style";

const VerifyAccount = () => {
    const verifiedData = useSelector((store) => store.verifyAccountReducer)
    const search = useLocation().search
    const email = new URLSearchParams(search).get('email')

    const dispatch = useDispatch()

    const sendOtp = (payload) => {
        dispatch(verifyAccount(payload))
    }

    return <Container>
        <ToastContainer />
        <Content>
            <BoxDiv >
                <Box>
                    <Formik
                        initialValues={{ email: email, otp: '' }}
                        validationSchema={validate}
                        onSubmit={(values) => sendOtp(values)}
                    >
                        {({ handleBlur, handleChange, handleSubmit, values, errors, touched }) => (
                            <form onSubmit={handleSubmit} >
                                <FormContent>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        width="100%"
                                        value={email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        readOnly />
                                    <ErrorMsg>{touched.email && errors.email ? errors.email : null}</ErrorMsg>
                                </FormContent>
                                <FormContent>
                                    <Label>OTP</Label>
                                    <Input
                                        type="text"
                                        name="otp"
                                        width="100%"
                                        value={values.otp}
                                        onBlur={handleBlur}
                                        onChange={handleChange} />
                                    <ErrorMsg>{errors.otp}</ErrorMsg>
                                    {/* <ErrorMsg>{touched.otp && errors.otp ? errors.otp : null}</ErrorMsg> */}
                                </FormContent>
                                <FormContent>
                                    <Button type="submit">{verifiedData && verifiedData.loading ? <Loader color="#fff" /> : 'Submit'}</Button>
                                </FormContent>
                            </form>
                        )}
                    </Formik>
                </Box>
            </BoxDiv>
        </Content>
    </Container>
}


export default VerifyAccount