import { ADD_BUDGET_EXPENSE, ADD_BUDGET_EXPENSE_FAILED, ADD_BUDGET_EXPENSE_SUCCESS } from "../types";

import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";


const token = localStorage.getItem('token')

const startAddBudget = () => ({
    type: ADD_BUDGET_EXPENSE
})

const addBudgetSuccess = (payload) => ({
    type: ADD_BUDGET_EXPENSE_SUCCESS,
    payload
})

const addBudgetFailed = payload => ({
    type: ADD_BUDGET_EXPENSE_FAILED,
    payload
})

const addBudgetExpense = (payload => {
    return function (dispatch) {
        dispatch(startAddBudget())
        axios.post(BASEURL + 'budget/expense', payload, headers(token))
            .then(res => {
                dispatch(addBudgetSuccess(res))
                setTimeout(() => {
                    window.location = ''
                }, 1000)
            }).catch(err => {
                if (err.response.status === 401) {
                    localStorage.clear()
                }
                dispatch(addBudgetFailed(err))
            })
    }
})

export default addBudgetExpense
