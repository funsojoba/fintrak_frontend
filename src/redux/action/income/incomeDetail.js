import { INCOME_DETAIL, INCOME_DETAIL_FAILED, INCOME_DETAIL_SUCCESS } from "../types";
import axios from "axios";
import headers from "../../request";
import BASEURL from "../../baseURL";
const token = localStorage.getItem('token')


const startIncomeDetail = ()=>({
    type: INCOME_DETAIL
})

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
        dispatch(startIncomeDetail())
        axios.get(BASEURL+'income/detail/'+id, headers(token))
        .then(res =>{
            dispatch(incomeDetailSuccess(res.data))
        }).catch(err =>{
            console.log(err)
            if (err.response.status === 401) {
                localStorage.clear()
            }
            dispatch(incomeDetailFailed(err))
        })
    }
}

export default fetchIncomeDetail