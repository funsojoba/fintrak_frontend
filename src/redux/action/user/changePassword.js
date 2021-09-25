import { CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED } from "../types";
import { toast } from 'react-toastify'

import axios from 'axios'
import headers from "../../request";
import BASEURL from "../../baseURL";


const token = localStorage.getItem('token')


const startChange = ()=>({
    type: CHANGE_PASSWORD
})

const changePasswordSuccess = payload =>({
    type: CHANGE_PASSWORD_SUCCESS,
    payload
})

const changePasswordFailed = payload =>({
    type: CHANGE_PASSWORD_FAILED,
    payload
})

const changePassword = payload =>{
    return function(dispatch){
        dispatch(startChange())
        axios.post(BASEURL+'user/change-password', payload, headers(token))
        .then(res =>{
            dispatch(changePasswordSuccess(res))
            const successMessage = res.data ? res.data.data.info : null
            toast.success(successMessage)
        })
        .catch(err =>{
            dispatch(changePasswordFailed(err))
            const errorMessage = err.response ? err.response.data.errors['password error'] : null;
            toast.error(errorMessage)
        })
    }
}

export default changePassword