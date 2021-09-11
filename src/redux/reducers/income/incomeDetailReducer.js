import { INCOME_DETAIL_FAILED, INCOME_DETAIL_SUCCESS } from "../../action/types";

const initialState = {
    data: '',
    error: ''
}

const incomeDetailReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case INCOME_DETAIL_SUCCESS:
            return {
                ...state,
                data: payload.data,
                error: null
            }
        case INCOME_DETAIL_FAILED:
            return {
                ...state,
                data: null,
                error: payload
            }
                        
        default:
            return state;

    }
}
export default incomeDetailReducer