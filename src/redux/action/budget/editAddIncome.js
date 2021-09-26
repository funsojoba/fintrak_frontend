import { EDIT_ADD_INCOME, EDIT_ADD_INCOME_FAILED, EDIT_ADD_INCOME_SUCCESS } from "../types"

import BASEURL from "../../baseURL"
import axios from 'axios'
import headers from "../../request"


const token = localStorage.getItem('token')

const startEdit = ()=>({
    type: EDIT_ADD_INCOME
})

const editAddIncomeSuccess = payload =>({
    type: EDIT_ADD_INCOME_SUCCESS,
    payload
})

const editAddIncomeFailed = payload =>({
    type: EDIT_ADD_INCOME_FAILED,
    payload
})


const editAddIncome = (payload, id)=>{
    return function(dispatch){
        dispatch(startEdit())
        axios.post(BASEURL + 'budget/edit-add-income/'+id, payload, headers(token))
        .then(res =>{
            dispatch(editAddIncomeSuccess(res))
            setTimeout(()=>{
                window.location =''
            }, 1000)
            console.log(res)
        }).catch(err =>{
            dispatch(editAddIncomeFailed(err))
        })
    }
}

export default editAddIncome