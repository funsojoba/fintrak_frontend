import axios from 'axios'
import BASEURL from '../../baseURL'

import { FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED } from '../types'
import {toast} from 'react-toastify'

const forgotStart = (payload)=>{
    return {type:FORGOT_PASSWORD}
}

const forgotFailed = (payload)=>({
    type:FORGOT_PASSWORD_FAILED,
    payload
})

const forgotSuccess = (payload)=>({
    type:FORGOT_PASSWORD_SUCCESS,
    payload
})

const forgotPassword = (payload)=>{
    return function(dispatch){
        dispatch(forgotStart())
        axios.post(BASEURL +'auth/forgot-password', payload)
        .then(res =>{
            toast.success('Pleace check your email to proceed')
            dispatch(forgotSuccess(res))
        }).catch(err => {
            const errorMessage = err.response ? err.response.data.detail : null;
            toast.error(errorMessage)
            dispatch(forgotFailed(err))
            console.log(err.response)
        })
    }
}

export default forgotPassword