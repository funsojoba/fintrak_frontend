import { DELETE_EXPENSE, DELETE_EXPENSE_SUCCESS, DELETE_EXPENSE_FAILED } from "../types";
import axios from 'axios'
import headers from "../../request";
import BASEURL from "../../baseURL";


const token = localStorage.getItem("token")

const startDelete = () => ({
    type: DELETE_EXPENSE
})

const deleteExpenseSuccess = (payload)=>({
    type: DELETE_EXPENSE_SUCCESS,
    payload
})

const deleteExpenseFailed = payload =>({
    type: DELETE_EXPENSE_FAILED,
    payload
})

const deleteExpense = (id) =>{
    return function(dispatch){
        dispatch(startDelete())
        axios.delete(BASEURL+'expense/delete/'+id, headers(token))
        .then(res=>{
            dispatch(deleteExpenseSuccess(res))
            console.log(res)
            setInterval(()=>{
                window.location ='/expense'
            }, 1000)
        }).catch(err =>{
            dispatch(deleteExpenseFailed(err))
            console.log(err.response)
        })
    }
}

export default deleteExpense