import { FETCH_INCOME_SUCCESS, FETCH_INCOME_FAILED } from "../../action/types";

const initialState = {
    data: '',
    error: ''
}

const fetchIncomeReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case FETCH_INCOME_FAILED:
            return {
                ...state,
                error: payload,
                data: null
            }
        case FETCH_INCOME_SUCCESS:
            return {
                ...state,
                error: null,
                data: payload
            }
        
        default:
            return state;
    }
}

export default fetchIncomeReducer