import { FETCH_USER, FETCH_USER_FAILED, FETCH_USER_SUCCESS } from "../types";
import axios from 'axios'
import BASEURL from '../../baseURL'
import headers from '../../request'

const token = localStorage.getItem('token')



const startFetching = ()=>({
    type: FETCH_USER
})

const fetchUserSuccess = payload =>({
    type: FETCH_USER_SUCCESS,
    payload
})

const fetchUserFailed = payload =>({
    type: FETCH_USER_FAILED,
    payload
})

const fetchUser = () =>{
    return function(dispatch){
        dispatch(startFetching())
        axios.get(BASEURL+'user', headers(token))
        .then(res =>{
            dispatch(fetchUserSuccess(res))
        }).catch(err => dispatch(fetchUserFailed(err)))
    }
}

export default fetchUser