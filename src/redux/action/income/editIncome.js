import { EDIT_INCOME, EDIT_INCOME_FAILED, EDIT_INCOME_SUCCESS } from "../types";

import BASEURL from "../../baseURL";
import headers from "../../request";
import axios from "axios";


const token = localStorage.getItem("token")


const startEdit = ()=>({
    type: EDIT_INCOME
})

const editIncomeSuccess = (payload)=>({
    type: EDIT_INCOME_SUCCESS,
    payload
})

const editIncomeFailed = (payload)=>({
    type: EDIT_INCOME_FAILED,
    payload
})

const editIncome = (payload, id)=>{
    return function(dispatch){
        dispatch(startEdit())
        axios.post(BASEURL+'income/edit/'+id, payload, headers(token))
        .then(res =>{
            dispatch(editIncomeSuccess(res))
            setTimeout(() => {
                window.location = ''
            }, 1000);
        }).catch(err =>{
            dispatch(editIncomeFailed(err))
            if (err.response.status === 401) {
                localStorage.clear()
            }
        })
    }
}

export default editIncome