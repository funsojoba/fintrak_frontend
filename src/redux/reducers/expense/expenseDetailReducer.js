import { EXPENSE_DETAIL, EXPENSE_DETAIL_FAILED, EXPENSE_DETAIL_SUCCESS } from "../../action/types";

const initialState = {
    data:'',
    error: '',
    loading: false
}

const expenseDetailReducer = (state=initialState, action)=>{
    const {payload, type} = action

    switch (type){
        case EXPENSE_DETAIL:
            return{
                ...state,
                loading: true
            }
        case EXPENSE_DETAIL_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload.data,
                error: null
            }
        case EXPENSE_DETAIL_FAILED:
            return{
                ...state,
                loading: false,
                error: payload,
                data: null
            }
        default:
            return state
    }
}

export default expenseDetailReducer