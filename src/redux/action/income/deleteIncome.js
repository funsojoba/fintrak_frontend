import {DELETE_INCOME_SUCCESS, DELETE_INCOME_FAILED, DELETE_INCOME} from '../types'

import BASEURL from '../../baseURL'
import axios from 'axios'
import headers from '../../request'


const token = localStorage.getItem('token')


const startDelete = ()=>({
    type: DELETE_INCOME
})

const deleteIncomeSuccess = (payload)=>({
    type: DELETE_INCOME_SUCCESS,
    payload
})

const deleteIncomeFailed = (payload)=>({
    type: DELETE_INCOME_FAILED,
    payload
})

const deleteIncome = (id)=>{
    return function(dispatch){
        dispatch(startDelete())
        axios.delete(BASEURL+'income/delete/'+id, headers(token))
        .then(res =>{
            dispatch(deleteIncomeSuccess(res))
            console.log(res)
            setInterval(() => {
                window.location = '/income'
            }, 1000);
        }).catch(err =>{
            dispatch(deleteIncomeFailed(err))
            console.log(err.response)
        })
    }
}

export default deleteIncome