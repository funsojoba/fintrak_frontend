import { BUDGET_DETAIL, BUDGET_DETAIL_SUCCESS, BUDGET_DETAIL_FAILED } from "../types";
import axios from 'axios'
import BASEURL from "../../baseURL";
import headers from "../../request";


const token = localStorage.getItem("token");


const startFetching = ()=>({
    type: BUDGET_DETAIL
})

const budgetDetailSuccess = payload =>({
    type: BUDGET_DETAIL_SUCCESS,
    payload
})

const budgetDetailFailed = payload =>({
    type: BUDGET_DETAIL_FAILED,
    payload
})

const getBudgetDetail = (id)=>{
    return function(dispatch){
        dispatch(startFetching())
        axios.get(BASEURL+'budget/detail/'+id, headers(token))
        .then(res=>{
            dispatch(budgetDetailSuccess(res))})
        .catch(err=>{
            dispatch(budgetDetailFailed(err))
        })
    }
}

export default getBudgetDetail