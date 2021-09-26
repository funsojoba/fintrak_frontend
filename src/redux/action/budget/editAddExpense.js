import { EDIT_ADD_EXPENSE, EDIT_ADD_EXPENSE_FAILED, EDIT_ADD_EXPENSE_SUCCESS } from "../types"

import BASEURL from "../../baseURL"
import axios from 'axios'
import headers from "../../request"


const token = localStorage.getItem('token')

const startEdit = () => ({
    type: EDIT_ADD_EXPENSE
})

const editAddExpenseSuccess = payload => ({
    type: EDIT_ADD_EXPENSE_SUCCESS,
    payload
})

const editAddExpenseFailed = payload => ({
    type: EDIT_ADD_EXPENSE_FAILED,
    payload
})


const editAddExpense = (payload, id) => {
    return function (dispatch) {
        dispatch(startEdit())
        axios.post(BASEURL + 'budget/edit-add-expense/' + id, payload, headers(token))
            .then(res => {
                dispatch(editAddExpenseSuccess(res))
                setTimeout(() => {
                    window.location = ''
                }, 1000)
                console.log(res)
            }).catch(err => {
                dispatch(editAddExpenseFailed(err))
            })
    }
}

export default editAddExpense