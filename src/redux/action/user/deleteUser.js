import { DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAILED } from "../types";

import axios from 'axios'
import BASEURL from '../../baseURL'
import headers from '../../request'

const token = localStorage.getItem('token')



const startDeleting = () => ({
    type: DELETE_USER
})

const deleteUserSuccess = payload => ({
    type: DELETE_USER_SUCCESS,
    payload
})

const deleteUserFailed = payload => ({
    type: DELETE_USER_FAILED,
    payload
})

const deleteUser = (payload=null) => {
    return function (dispatch) {
        dispatch(startDeleting())
        axios.post(BASEURL + 'user/delete',payload, headers(token))
            .then(res => {
                dispatch(deleteUserSuccess(res))
                localStorage.clear()
                console.log('res---', res)
                setTimeout(() => {
                    window.location = '/'
                }, 1000)
            }).catch(err => {
                dispatch(deleteUserFailed(err))
                console.log('errrorr--', err)
            })
    }
}

export default deleteUser