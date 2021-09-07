import {VERIFY, VERIFY_SUCCESS, VERIFY_FAILED} from '../types'
import axios from 'axios'
import BASEURL from '../../baseURL'


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
            dispatch(verifySuccess(res))
        }).catch(err =>{
            console.log(err)
            dispatch(verifyFailed(err))
        })
    }
}

export default verifyAccount