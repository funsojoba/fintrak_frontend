import { FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILED,  } from "./types";
import BASEURL from "../baseURL";
import axios from "axios";
import headers from "../request";

const token = localStorage.getItem('token')

const fetchDashboardSuccess = (payload)=>({
    type: FETCH_DASHBOARD_SUCCESS,
    payload
})

const fetchDashboardFailed = (payload)=>{
    if(payload.response.status === "401"){
        localStorage.clear()
    }
    return{
        type: FETCH_DASHBOARD_FAILED,
        payload
    }
}

const fetchDashboard = ()=>{
    return function(dispatch){
        axios.get(BASEURL +'dashboard', headers(token))
        .then(res =>{
            dispatch(fetchDashboardSuccess(res.data.data))
            console.log(res)
        }).catch(err =>{
            dispatch(fetchDashboardFailed(err))
            console.log(err.response.status)

        })
    }
}

export default fetchDashboard