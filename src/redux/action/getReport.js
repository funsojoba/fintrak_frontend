import {GET_REPORT, GET_REPORT_FAILED, GET_REPORT_SUCCESS} from './types'
import BASE_URL from "../baseURL"
import axios from 'axios'
import headers, {fileHeader} from '../request';

const token = localStorage.getItem('token')


const startFetchReport = ()=>({
    type: GET_REPORT
})

const fetchReportFailed = (payload)=>{
    // if(payload.response.status === 401){
    //     localStorage.clear()
    // }
    return{
    type: GET_REPORT_FAILED,
    payload}
    }

const fetchReportSuccess = payload =>({
    type: GET_REPORT_SUCCESS,
    payload
})

const fetchReport = ()=>{
    return function(dispatch){
        dispatch(startFetchReport())
        axios.get(BASE_URL + 'dashboard/report-pdf-two', fileHeader(token))
        .then(res =>{
            dispatch(fetchReportSuccess(res.data))
        }).catch(err =>{
            dispatch(fetchReportFailed(err))
            // if(err.response.status === 401){
            //     localStorage.clear()
            // }
        })
    }
}

export default fetchReport