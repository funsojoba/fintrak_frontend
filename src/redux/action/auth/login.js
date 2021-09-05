import axios from 'axios'
import BASEURL from '../../baseURL'

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../types'
import {toast} from 'react-toastify'

const loginStart = (payload)=>{
    return {type:LOGIN}
}

const loginFailed = (payload)=>({
    type:LOGIN_FAILED,
    payload
})

const loginSuccessful = (payload)=>({
    type:LOGIN_SUCCESS,
    payload
})

const login = (payload)=>{
    return function(dispatch){
        dispatch(loginStart())
        axios.post(BASEURL +'auth/api/token/', payload)
        .then(res =>{
            toast.success('Welcome back')
            dispatch(loginSuccessful(res))
            console.log(payload)
            setInterval(function () {
                window.location = "/dashboard";
            }, 2500);
        }).catch(err => {
            const errorMessage = err.response ? err.response.data.detail : null;
            toast.error(errorMessage)
            dispatch(loginFailed(err))
        })
    }
}

export default login