import { INCOME_CSV_SUCCESS, INCOME_CSV_FAILED } from '../types'
import axios from 'axios'
import BASEURL from '../../baseURL'
import headers from '../../request'

const token = localStorage.getItem('token')

const fetchIncomeCSVSuccess = (payload) => ({
    type: INCOME_CSV_SUCCESS,
    payload
})

const fetchIncomeCSVFailed = (payload) => ({
    type: INCOME_CSV_FAILED,
    payload
})

const fetchIncomeCSV = () => {
    return (dispatch) => {
        axios.get(BASEURL + 'income/income-csv', headers(token))
            .then(res => {
                dispatch(fetchIncomeCSVSuccess(res.data.data))
            }).catch(err => {
                dispatch(fetchIncomeCSVFailed(err))
            })
    }
}


export default fetchIncomeCSV