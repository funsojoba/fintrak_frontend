import { EDIT_EXPENSE, EDIT_EXPENSE_SUCCESS, EDIT_EXPENSE_FAILED} from '../types'

import BASEURL from '../../baseURL'
import headers from '../../request'
import axios from 'axios'

const token = localStorage.getItem('token')


const startEdit = ()=>({
    type: EDIT_EXPENSE
})

const editExpenseSuccess = (payload)=>({
    type: EDIT_EXPENSE_SUCCESS,
    payload
})

const editExpenseFailed = payload =>({
    type: EDIT_EXPENSE_FAILED,
    payload
})

const editExpense = (payload, id)=>{
    return function(dispatch){
        dispatch(startEdit())
        axios.patch(BASEURL+'expense/edit/'+id, payload, headers(token))
        .then((res) => {
            dispatch(editExpenseSuccess(res))
            setTimeout(() => {
                window.location = ''
            }, 1000);
        })
        .catch(err =>{
            dispatch(editExpenseFailed(err))
        })
    }
}

export default editExpense