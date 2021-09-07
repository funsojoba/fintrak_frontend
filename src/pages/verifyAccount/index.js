import { useLocation } from "react-router-dom";
import verifyAccount from "../../redux/action/auth/verifyAccount";
import H5 from "../../components/typography/h5";
import { useEffect } from "react";

import Loader from 'react-spinners/SyncLoader'
import { ToastContainer } from "react-toastify";

import { useDispatch, useSelector } from 'react-redux'
import { Container, Content, BoxDiv } from "./style";

const VerifyAccount = () => {
    const verifiedData = useSelector((store) => store.verifyAccountReducer)
    const search = useLocation().search
    const otp = new URLSearchParams(search).get('otp')
    const email = new URLSearchParams(search).get('email')

    const dispatch = useDispatch()
    const payload = {
        otp,
        email
    }
    const sendOtp = () => {
        dispatch(verifyAccount(payload))
    }

    useEffect(()=>{
        sendOtp()
    }, [])
    console.log('testing...', verifiedData)
    return <Container>
        <ToastContainer />
        <Content>
            <BoxDiv >
            
                    {verifiedData.loading ? (
                        <>
                            <H5 color="#1C246D">Verifying Account . . .</H5>
                            <Loader color="#1C246D" /></>
                ) : <H5 color="#1C246D">Done Verifying</H5>}
                
            </BoxDiv>
        </Content>
    </Container>
}


export default VerifyAccount