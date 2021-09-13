import { FETCH_DASHBOARD, FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILED } from "../action/types";

const initialState = {
    loading: false,
    data:'',
    error:''
}

const dashboardReducer = (state=initialState, action)=>{
    const {payload, type} = action

    switch (type) {
        case FETCH_DASHBOARD:
            return {
                ...state,
                loading:true
            }
        case FETCH_DASHBOARD_SUCCESS:
            return {
                ...state,
                data: payload,
                error: null,
                loading: false
            }
        case FETCH_DASHBOARD_FAILED:
            return {
                ...state,
                data: null,
                error:payload,
                loading: false
            }
    
        default:
            return state;
    }
}

export default dashboardReducer