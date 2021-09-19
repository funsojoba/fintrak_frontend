import { FETCH_BUDGET, FETCH_BUDGET_SUCCESS, FETCH_BUDGET_FAILED } from "../../action/types";

const initialState = {
    loading: false,
    error: '',
    data: ''
}


const fetchBudgetReducer = (state=initialState, action)=>{
    const {payload, type} =  action;

    switch (type) {
        case FETCH_BUDGET:
            return{
                ...state,
                loading: true,
            }
        case FETCH_BUDGET_FAILED:{
            return{
                ...state,
                loading: false,
                error: payload,
                data: null,
                }
            }
        case FETCH_BUDGET_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                data: payload.data.data
            }
    
        default:
            return state;
    }
}

export default fetchBudgetReducer