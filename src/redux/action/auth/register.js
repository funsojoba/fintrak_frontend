import axios from "axios";
import BASEURL from "../../baseURL";

import { REGISTER, REGISTER_FAILED, REGISTER_SUCCESS } from "../types";
import { toast } from "react-toastify";


const registerStart = ()=>({
    type:REGISTER
})

const registerFailed = payload =>({
    type:REGISTER_FAILED,
    payload
})

const registerSuccess = payload =>({
    type:REGISTER_SUCCESS,
    payload
})

const register = payload =>{
    return function(dispatch){
        dispatch(registerStart())
        axios.post(BASEURL + 'auth/register', payload)
        .then(res =>{
            toast.success('Sign up successful')
            dispatch(registerSuccess(res))
            setInterval(function () {
                window.location = "/login";
            }, 2500);
        }).catch(err =>{
            const error = err.response ? Object.values(err.response.data.errors)[0] : []
            toast.error(error[0])
            dispatch(registerFailed(err))
        })
    }
}

export default register