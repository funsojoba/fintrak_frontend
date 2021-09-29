import { DELETE_EXPENSE_BUDGET, DELETE_EXPENSE_BUDGET_FAILED, DELETE_EXPENSE_BUDGET_SUCCESS } from "../types";

import BASEURL from "../../baseURL"
import axios from 'axios'
import headers from "../../request"


const token = localStorage.getItem('token')

const startDelete = () => ({
    type: DELETE_EXPENSE_BUDGET
})

const deleteExpenseBudgetSucces = payload => ({
    type: DELETE_EXPENSE_BUDGET_SUCCESS,
    payload
})

const deleteExpenseBudgetFailed = payload => ({
    type: DELETE_EXPENSE_BUDGET_FAILED,
    payload
})


const deleteBudgetExpense = (id, payload = null) => {
    return function (dispatch) {
        dispatch(startDelete())
        axios.post(BASEURL + 'budget/delete-expense/' + id, payload, headers(token))
            .then(res => {
                dispatch(deleteExpenseBudgetSucces(res))
                setTimeout(() => {
                    window.location = ''
                }, 1000)
                console.log(res)
            }).catch(err => {
                dispatch(deleteExpenseBudgetFailed(err))
            })
    }
}

export default deleteBudgetExpense