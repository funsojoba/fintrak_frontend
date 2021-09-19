import { FETCH_BUDGET_SUCCESS, FETCH_BUDGET, FETCH_BUDGET_FAILED } from "../types";

import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";


const token = localStorage.getItem('token')


const startFetchBudget = ()=>({
    type: FETCH_BUDGET
})

const fetchBudgetSuccess = payload =>({
    type: FETCH_BUDGET_SUCCESS,
    payload
})

const fetchBudgetFailed = payload =>({
    type: FETCH_BUDGET_FAILED,
    payload
})


const fetchBudget = () =>{
    return function(dispatch){
        dispatch(startFetchBudget())
        axios.get(BASEURL+'budget', headers(token))
        .then(res =>{
            dispatch(fetchBudgetSuccess(res))
        }).catch(err=>{
            if (err.response.status === 401) {
                localStorage.clear()
            }
            dispatch(fetchBudgetFailed(err))
        })
    }
}

export default fetchBudget