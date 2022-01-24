import { FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD, FORGOT_PASSWORD_FAILED } from '../action/types';

const initialState = {
    isLoading: false,
    data: null,
    error: null
}

const forgotPasswordReducer = (state=initialState, action)=>{
    const {payload, type} = action;

    switch (type) {
        case FORGOT_PASSWORD:
            return{
                ...state,
                isLoading: true
            }
        case FORGOT_PASSWORD_FAILED:
            return{
                ...state,
                isLoading:false,
                error: payload,
                data:null
            }
        case FORGOT_PASSWORD_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error: null,
                data:payload
            }
    
        default:
            return state
    }
}

export default forgotPasswordReducer