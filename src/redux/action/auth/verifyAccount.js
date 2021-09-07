import {VERIFY, VERIFY_SUCCESS, VERIFY_FAILED} from '../types'
import axios from 'axios'
import BASEURL from '../../baseURL'
import { toast } from 'react-toastify'


const startVerify = ()=>({
    type:VERIFY
})

const verifySuccess = payload =>({
    type: VERIFY_SUCCESS,
    payload
})

const verifyFailed = payload =>({
    type: VERIFY_FAILED,
    payload
})

const verifyAccount = payload =>{
    return function(dispatch){
        dispatch(startVerify())
        axios.post(BASEURL + "auth/verify-account", payload)
        .then(res =>{
            console.log(res)
            toast.success(res.data)
            dispatch(verifySuccess(res))
            setTimeout(()=>{
                window.location ="/login"
            }, 1500)
        }).catch(err =>{
            toast.error(err.response.data.error)
            dispatch(verifyFailed(err))
        })
    }
}

export default verifyAccount