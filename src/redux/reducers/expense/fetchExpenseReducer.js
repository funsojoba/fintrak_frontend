import { FETCH_EXPENSE, FETCH_EXPENSE_SUCCESS, FETCH_EXPENSE_FAILED } from "../../action/types";

const initialState = {
    data: '',
    error: '',
    loading: false
}

const fetchExpenseReducer = (state=initialState, action)=>{
    const {type, payload} =  action

    switch (type) {
        case FETCH_EXPENSE_FAILED:
            return{
                ...state,
                data: null,
                error: payload,
                loading: false
            }
        case FETCH_EXPENSE_SUCCESS:
            return{
                ...state,
                data: payload,
                error: null,
                loading: false
            }
        case FETCH_EXPENSE:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default fetchExpenseReducer