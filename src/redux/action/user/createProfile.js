import { ADD_USER_PROFILE, ADD_USER_PROFILE_SUCCESS, ADD_USER_PROFILE_FAILED} from '../types'

import axios from 'axios'
import BASEURL from '../../baseURL'
import headers from '../../request'

const token = localStorage.getItem('token')



const startAddUser = () => ({
    type: ADD_USER_PROFILE
})

const addUserSuccess = payload => ({
    type: ADD_USER_PROFILE_SUCCESS,
    payload
})

const addUserFailed = payload => ({
    type: ADD_USER_PROFILE_FAILED,
    payload
})

const addUserProfile = (payload) => {
    return function (dispatch) {
        dispatch(startAddUser())
        axios.post(BASEURL + 'user/create', payload, headers(token))
            .then(res => {
                dispatch(addUserSuccess(res))
                setTimeout(()=>{
                    window.location =''}, 1000)
            }).catch(err => dispatch(addUserFailed(err)))
    }
}

export default addUserProfile