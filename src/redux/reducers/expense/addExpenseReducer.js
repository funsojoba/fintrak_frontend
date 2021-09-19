import { ADD_EXPENSE, ADD_EXPENSE_SUCCESS, ADD_EXPENSE_FAILED } from "../../action/types";

const initialState = {
    loading:false,
    data: '',
    error: ''
}

const addExpenseReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case ADD_EXPENSE:
            return{
                ...state,
                loading: true
            }
        case ADD_EXPENSE_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload,
                error: null
            }
        case ADD_EXPENSE_FAILED:
            return{
                ...state,
                loading: false,
                data: null,
                error: payload
            }
        default:
            return state
    }
}

export default addExpenseReducer