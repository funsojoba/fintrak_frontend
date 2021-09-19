import { ADD_BUDGET_EXPENSE, ADD_BUDGET_EXPENSE_FAILED, ADD_BUDGET_EXPENSE_SUCCESS } from "../../action/types";

const initialState = {
    loading: false,
    data: '',
    error: ''
}

const addBudgetExpenseReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_BUDGET_EXPENSE:
            return {
                ...state,
                loading: true,
            }
        case ADD_BUDGET_EXPENSE_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                error: payload
            }
        case ADD_BUDGET_EXPENSE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.data,
                error: null
            }

        default:
            return state;
    }
}

export default addBudgetExpenseReducer