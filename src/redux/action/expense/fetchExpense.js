import { FETCH_EXPENSE, FETCH_EXPENSE_FAILED, FETCH_EXPENSE_SUCCESS } from "../types";
import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";

const token = localStorage.getItem('token')


const startFetch = ()=>({
    type: FETCH_EXPENSE
})

const fetchExpenseSuccess = (payload)=>({
    type: FETCH_EXPENSE_SUCCESS,
    payload
})

const fetchExpenseFailed = payload =>({
    type: FETCH_EXPENSE_FAILED,
    payload
})


const fetchExpense = () =>{
    return function(dispatch){
        dispatch(startFetch())
        axios.get(BASEURL+'expense/list', headers(token))
        .then(res =>{
            dispatch(fetchExpenseSuccess(res))
        }).catch(err =>{
            dispatch(fetchExpenseFailed(err))
        })
    }
}

export default fetchExpense