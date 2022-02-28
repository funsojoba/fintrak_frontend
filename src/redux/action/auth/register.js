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
            toast.success('Success! Please check mail to confirm account')
            dispatch(registerSuccess(res))
        }).catch(err =>{
            const error = err.response ? Object.values(err.response.data.errors)[0] : []
            toast.error(error[0])
            dispatch(registerFailed(err))
            // console.log("****>>>", error)
        })
    }
}

export default register