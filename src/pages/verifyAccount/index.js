import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import verifyAccount from "../../redux/action/auth/verifyAccount";

import { useEffect } from "react";

const VerifyAccount = ({verifyAccount, verifyData})=>{
    const search = useLocation().search
    const otp = new URLSearchParams(search).get('otp')
    const email = new URLSearchParams(search).get('email')

    const sendOtp =()=>{

        const payload = {
            otp,
            email
        }
        verifyAccount(payload)
    }


    useEffect(sendOtp, [otp, email, sendOtp, verifyData])

    return <div>Hello {otp} - {email}</div>
}

const mapStateToProps = (store)=>({
    verifyData: store.verifyAccountReducer
})

export default connect(mapStateToProps, {verifyAccount})(VerifyAccount)