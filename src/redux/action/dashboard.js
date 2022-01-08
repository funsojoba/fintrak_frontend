import { FETCH_DASHBOARD, FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILED,  } from "./types";
import BASEURL from "../baseURL";
import axios from "axios";
import headers from "../request";

const token = localStorage.getItem('token')

const startFetchDashboard = ()=>({
    type: FETCH_DASHBOARD
})

const fetchDashboardSuccess = (payload)=>({
    type: FETCH_DASHBOARD_SUCCESS,
    payload
})

const fetchDashboardFailed = (payload)=>{
    if(payload.response.status === 401){
        localStorage.clear()
    }
    return{
        type: FETCH_DASHBOARD_FAILED,
        payload
    }
}

const fetchDashboard = (month)=>{
    return function(dispatch){
        dispatch(startFetchDashboard())
        axios.get(BASEURL +'dashboard/month/'+month, headers(token))
        .then(res =>{
            dispatch(fetchDashboardSuccess(res.data.data))
        }).catch(err =>{
            dispatch(fetchDashboardFailed(err))
            if(err.response.status === 401){
                localStorage.clear()
            }
        })
    }
}

export default fetchDashboard