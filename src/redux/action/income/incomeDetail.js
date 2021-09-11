import { INCOME_DETAIL_FAILED, INCOME_DETAIL_SUCCESS } from "../types";
import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";
const token = localStorage.getItem('token')


const incomeDetailFailed = payload=>({
    type: INCOME_DETAIL_FAILED,
    payload
})

const incomeDetailSuccess = payload =>({
    type: INCOME_DETAIL_SUCCESS,
    payload
})

const fetchIncomeDetail = (id)=>{
    return function(dispatch){
        axios.get(BASEURL+'income/detail/'+id, headers(token))
        .then(res =>{
            console.log(res.data)
            dispatch(incomeDetailSuccess(res.data))
        }).catch(err =>{
            console.log(err)
            dispatch(incomeDetailFailed(err))
        })
    }
}

export default fetchIncomeDetail