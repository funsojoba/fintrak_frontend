import { DELETE_INCOME_FAILED, DELETE_INCOME_SUCCESS, DELETE_INCOME } from "../../action/types";

const initialState = {
    data: '',
    error: '',
    loading: false
}



const deleteIncomeReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case DELETE_INCOME:
            return {
                ...state,
                loading: true
            }
        case DELETE_INCOME_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null
            }
        case DELETE_INCOME_FAILED:
            return{
                ...state,
                loading: false,
                data: null,
                error: payload
            }
    
        default:
            return state;
    }
}

export default deleteIncomeReducer