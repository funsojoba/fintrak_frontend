import { BUDGET_DETAIL, BUDGET_DETAIL_SUCCESS, BUDGET_DETAIL_FAILED } from "../../action/types";

const initialState = {
    loading: false,
    error: '',
    data: ''
}


const budgetDetailReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case BUDGET_DETAIL:
            return {
                ...state,
                loading: true,
            }
        case BUDGET_DETAIL_FAILED: {
            return {
                ...state,
                loading: false,
                error: payload,
                data: null,
            }
        }
        case BUDGET_DETAIL_SUCCESS:
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

export default budgetDetailReducer