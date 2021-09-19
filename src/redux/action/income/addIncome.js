import { ADD_INCOME, ADD_INCOME_FAILED, ADD_INCOME_SUCCESS } from "../types";

import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";


const token = localStorage.getItem('token')


const startAdd=()=>({
    type: ADD_INCOME
})

const addIncomeFailed = payload =>(
   { type: ADD_INCOME_FAILED,
    payload}
)

const addIncomeSuccess = payload =>({
    type: ADD_INCOME_SUCCESS,
    payload
})

const addIncome = payload =>{
    return function(dispatch){
        dispatch(startAdd())
        axios.post(BASEURL+'income/add', payload, headers(token))
        .then(res =>{
            dispatch(addIncomeSuccess(res))
            setInterval(function () {
                window.location = "/income";
            }, 1500);
        })
        .catch(err =>{
            dispatch(addIncomeFailed(err))
            if (err.response.status === 401) {
                localStorage.clear()
            }
            console.log(err)
        })
    }
}

export default addIncome