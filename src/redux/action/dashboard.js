import { FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILED,  } from "./types";
import BASEURL from "../baseURL";
import axios from "axios";
import headers from "../request";

const token = localStorage.getItem('token')

const fetchDashboardSuccess = (payload)=>({
    type: FETCH_DASHBOARD_SUCCESS,
    payload
})

const fetchDashboardFailed = (payload)=>({
    type: FETCH_DASHBOARD_FAILED,
    payload
})

const fetchDashboard = ()=>{
    return function(dispatch){
        axios.get(BASEURL +'dashboard', headers(token))
        .then(res =>{
            
            dispatch(fetchDashboardSuccess(res.data.data))
        }).catch(err =>{
            console.log('errr---', err)
            dispatch(fetchDashboardFailed(err))
        })
    }
}

export default fetchDashboard