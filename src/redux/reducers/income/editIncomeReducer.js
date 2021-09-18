import { EDIT_INCOME, EDIT_INCOME_FAILED, EDIT_INCOME_SUCCESS } from "../../action/types";

const initialState = {
    data: '',
    error: '',
    loading : false
}

const editIncomeReducer = (state=initialState, action)=>{
    const {payload, type} = action

    switch (type) {
        case EDIT_INCOME:
            return{
                ...state,
                loading: true
            }
        case EDIT_INCOME_FAILED:
            return{
                ...state,
                loading:false,
                data: null,
                error: payload
            }
        case EDIT_INCOME_SUCCESS:
            return{
                ...state,
                loading:false,
                data: payload,
                error: null
            }
    
        default:
            return state
    }
}

export default editIncomeReducer