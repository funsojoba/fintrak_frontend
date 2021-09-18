import {EDIT_EXPENSE, EDIT_EXPENSE_SUCCESS, EDIT_EXPENSE_FAILED} from '../../action/types'


const initialState = {
    data:'',
    error: '',
    loading: false
}

const editExpenseReducer = (state=initialState, action)=>{
    const {payload, type} =  action

    switch (type) {
        case EDIT_EXPENSE:
            return{
                ...state,
                loading: true
            }
        case EDIT_EXPENSE_SUCCESS:

            return{
                ...state,
                loading: false,
                error: null,
                data: payload
            }
        case EDIT_EXPENSE_FAILED:
            return{
                ...state,
                loading: false,
                error: payload,
                data: null
            }
    
        default:
            return state;
    }
}

export default editExpenseReducer
