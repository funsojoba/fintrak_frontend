import { ADD_EXPENSE, ADD_EXPENSE_SUCCESS, ADD_EXPENSE_FAILED } from "../types";
import BASEURL from "../../baseURL";
import axios from "axios";
import headers from "../../request";

const token = localStorage.getItem('token')

const startAddExpense = () => ({
    type: ADD_EXPENSE
})

const addExpenseSuccess = payload =>({
    type: ADD_EXPENSE_SUCCESS,
    payload
})

const addExpenseFailed = payload =>({
    type: ADD_EXPENSE_FAILED,
    payload
})

const addExpense = payload =>{
    return function(dispatch){
        dispatch(startAddExpense())
        axios.post(BASEURL +'expense/add', payload, headers(token))
        .then(res =>{
            dispatch(addExpenseSuccess(res))
            setTimeout(()=>{
                window.location='/expense'
            }, 1000)
        }).catch(err =>{
            dispatch(addExpenseFailed(err))
        })
    }
}
export default addExpense