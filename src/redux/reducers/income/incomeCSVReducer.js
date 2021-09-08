import { INCOME_CSV_SUCCESS, INCOME_CSV_FAILED } from "../../action/types";

const initialState = {
    data: '',
    error: ''
}

const incomeCSVReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case INCOME_CSV_FAILED:
            return {
                ...state,
                error: payload,
                data: null
            }
        case INCOME_CSV_SUCCESS:
            return {
                ...state,
                error: null,
                data: payload
            }

        default:
            return state;
    }
}

export default incomeCSVReducer