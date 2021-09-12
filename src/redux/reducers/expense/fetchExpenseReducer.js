import { FETCH_EXPENSE_SUCCESS, FETCH_EXPENSE_FAILED } from "../../action/types";

const initialState = {
    data: '',
    error: ''
}

const fetchExpenseReducer = (state=initialState, action)=>{
    const {type, payload} =  action

    switch (type) {
        case FETCH_EXPENSE_FAILED:
            return{
                ...state,
                data: null,
                error: payload
            }
        case FETCH_EXPENSE_SUCCESS:
            return{
                ...state,
                data: payload,
                error: null
            }
    
        default:
            return state;
    }
}

export default fetchExpenseReducer