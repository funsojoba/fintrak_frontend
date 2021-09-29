import { DELETE_INCOME_BUDGET, DELETE_INCOME_BUDGET_FAILED, DELETE_INCOME_BUDGET_SUCCESS } from "../types";

import BASEURL from "../../baseURL"
import axios from 'axios'
import headers from "../../request"


const token = localStorage.getItem('token')

const startDelete = () => ({
    type: DELETE_INCOME_BUDGET
})

const deleteIncomeBudgetSucces = payload => ({
    type: DELETE_INCOME_BUDGET_SUCCESS,
    payload
})

const deleteIncomeBudgetFailed = payload => ({
    type: DELETE_INCOME_BUDGET_FAILED,
    payload
})


const deleteBudgetIncome = (id, payload=null) => {
    return function (dispatch) {
        dispatch(startDelete())
        axios.post(BASEURL + 'budget/delete-income/'+id, payload, headers(token))
            .then(res => {
                dispatch(deleteIncomeBudgetSucces(res))
                setTimeout(() => {
                    window.location = ''
                }, 1000)
                console.log(res)
            }).catch(err => {
                dispatch(deleteIncomeBudgetFailed(err))
            })
    }
}

export default deleteBudgetIncome