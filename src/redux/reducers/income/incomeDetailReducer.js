import {INCOME_DETAIL, INCOME_DETAIL_FAILED, INCOME_DETAIL_SUCCESS } from "../../action/types";

const initialState = {
    data: '',
    error: '',
    loading: false
}

const incomeDetailReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case INCOME_DETAIL_SUCCESS:
            return {
                ...state,
                data: payload.data,
                error: null,
                loading: false
            }
        case INCOME_DETAIL_FAILED:
            return {
                ...state,
                data: null,
                error: payload,
                loading: false
            }
        case INCOME_DETAIL:
            return{
                ...state,
                loading: true
            }
                        
        default:
            return state;

    }
}
export default incomeDetailReducer