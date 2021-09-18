import { EXPENSE_DETAIL, EXPENSE_DETAIL_FAILED, EXPENSE_DETAIL_SUCCESS } from "../types";
import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";
const token = localStorage.getItem('token')


const startIncomeDetail = () => ({
    type: EXPENSE_DETAIL
})

const expenseDetailFailed = payload => ({
    type: EXPENSE_DETAIL_FAILED,
    payload
})

const expenseDetailSuccess = payload => ({
    type: EXPENSE_DETAIL_SUCCESS,
    payload
})

const fetchExpenseDetail = (id) => {
    return function (dispatch) {
        dispatch(startIncomeDetail())
        axios.get(BASEURL + 'expense/detail/' + id, headers(token))
            .then(res => {
                dispatch(expenseDetailSuccess(res.data))
            }).catch(err => {
                if (err.response.status === 401) {
                    localStorage.clear()
                }
                dispatch(expenseDetailFailed(err))
            })
    }
}

export default fetchExpenseDetail