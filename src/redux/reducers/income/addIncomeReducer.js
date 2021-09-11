import { ADD_INCOME, ADD_INCOME_FAILED, ADD_INCOME_SUCCESS } from "../../action/types";

const initialState = {
    data:'',
    error:'',
    loading:false
}

const addIncomeReducer = (state=initialState, action)=>{
    const {payload, type} = action

    switch (type) {
        case ADD_INCOME:
            return{
                ...state,
                loading: true
            }
            
        case ADD_INCOME_FAILED:
            return{
                ...state,
                data: null,
                error: payload,
                loading:false
            }
        case ADD_INCOME_SUCCESS:
            return{
                ...state,
                data: payload,
                error: null,
                loading: false
            }
    
        default:
            return state
    }
}

export default addIncomeReducer