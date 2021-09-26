import {EDIT_ADD_INCOME, EDIT_ADD_INCOME_SUCCESS, EDIT_ADD_INCOME_FAILED} from '../../action/types'

const initialState = {
    loading: false,
    error: '',
    data: ''
}


const editAddIncomeReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case EDIT_ADD_INCOME:
            return {
                ...state,
                loading: true,
            }
        case EDIT_ADD_INCOME_FAILED: {
            return {
                ...state,
                loading: false,
                error: payload,
                data: null,
            }
        }
        case EDIT_ADD_INCOME_SUCCESS:
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

export default editAddIncomeReducer