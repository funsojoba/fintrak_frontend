import { DELETE_INCOME_BUDGET, DELETE_INCOME_BUDGET_SUCCESS, DELETE_INCOME_BUDGET_FAILED } from "../../action/types";


const initialState = {
    loading: false,
    error: '',
    data: ''
}


const deleteBudgetIncomeReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case DELETE_INCOME_BUDGET:
            return {
                ...state,
                loading: true,
            }
        case DELETE_INCOME_BUDGET_FAILED: {
            return {
                ...state,
                loading: false,
                error: payload,
                data: null,
            }
        }
        case DELETE_INCOME_BUDGET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: payload.data.data
            }

        default:
            return state;
    }
}

export default deleteBudgetIncomeReducer