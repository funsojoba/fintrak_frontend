import { FETCH_DASHBOARD, FETCH_DASHBOARD_SUCCESS, FETCH_DASHBOARD_FAILED } from "../action/types";

const initialState = {
    data:'',
    error:''
}

const dashboardReducer = (state=initialState, action)=>{
    const {payload, type} = action

    switch (type) {
        case FETCH_DASHBOARD:
            return {
                ...state,
            }
        case FETCH_DASHBOARD_SUCCESS:
            return {
                ...state,
                data: payload,
                error: null
            }
        case FETCH_DASHBOARD_FAILED:
            return {
                ...state,
                data: null,
                error:payload
            }
    
        default:
            return state;
    }
}

export default dashboardReducer