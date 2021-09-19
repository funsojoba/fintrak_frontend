import { FETCH_INCOME_SUCCESS, FETCH_INCOME_FAILED } from '../types'
import axios from 'axios'
import BASEURL from '../../baseURL'
import headers from '../../request'

const token = localStorage.getItem('token')

const fetchIncomeSuccess = (payload)=>({
    type: FETCH_INCOME_SUCCESS,
    payload
})

const fetchIncomeFailed = (payload)=>({
    type: FETCH_INCOME_FAILED,
    payload
})

const fetchIncome = ()=>{
    return (dispatch)=>{
        axios.get(BASEURL +'income/list', headers(token))
        .then(res =>{
            dispatch(fetchIncomeSuccess(res.data.data))
        }).catch(err =>{
            dispatch(fetchIncomeFailed(err))
            if (err.response.status === 401) {
                localStorage.clear()
            }
            console.log(err)
        })
    }
}


export default fetchIncome