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
        axios.post(BASEURL +'auth/login', payload)
        .then(res =>{
            toast.success('Welcome back ' + res.data.data.user.first_name)
            dispatch(loginSuccessful(res))
            setInterval(function () {
                window.location = "/dashboard";
            }, 2500);
        }).catch(err => {
            const errorMessage = err.response ? err.response.data.errors.error : null;
            toast.error(errorMessage)
            dispatch(loginFailed(err.response))
        })
    }
}

export default login