import {EDIT_ADD_EXPENSE, EDIT_ADD_EXPENSE_SUCCESS, EDIT_ADD_EXPENSE_FAILED} from '../../action/types'

const initialState = {
    loading: false,
    error: '',
    data: ''
}


const editAddExpenseReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case EDIT_ADD_EXPENSE:
            return {
                ...state,
                loading: true,
            }
        case EDIT_ADD_EXPENSE_FAILED: {
            return {
                ...state,
                loading: false,
                error: payload,
                data: null,
            }
        }
        case EDIT_ADD_EXPENSE_SUCCESS:
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

export default editAddExpenseReducer