import { ADD_BUDGET, ADD_BUDGET_FAILED, ADD_BUDGET_SUCCESS } from "../types";

import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";


const token = localStorage.getItem('token')

const startAddBudget = ()=>({
    type: ADD_BUDGET
})

const addBudgetSuccess = (payload)=>({
    type: ADD_BUDGET_SUCCESS,
    payload
})

const addBudgetFailed = payload =>({
    type: ADD_BUDGET_FAILED,
    payload
})

const addIncomeBudget =(payload=>{
    return function(dispatch){
        dispatch(startAddBudget())
        axios.post(BASEURL +'budget/income', payload, headers(token))
        .then(res =>{
            dispatch(addBudgetSuccess(res))
            setTimeout(()=>{
                window.location = ''
            }, 1000)
        }).catch(err =>{
            dispatch(addBudgetFailed(err))
        })
    }
})

export default addIncomeBudget
