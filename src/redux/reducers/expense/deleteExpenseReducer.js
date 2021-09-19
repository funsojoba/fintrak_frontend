import { DELETE_EXPENSE, DELETE_EXPENSE_SUCCESS, DELETE_EXPENSE_FAILED } from "../../action/types";

const initialState = {
    loading: false,
    error: '',
    data: ''
}


const deleteExpenseReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_EXPENSE:
            return {
                ...state,
                loading: true
            }
        case DELETE_EXPENSE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null
            }
        case DELETE_EXPENSE_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
                data: null
            }
        default:
            return state;
    }
}

export default deleteExpenseReducer