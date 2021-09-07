import { VERIFY, VERIFY_SUCCESS, VERIFY_FAILED } from "../action/types";

const initialState = {
    data:"",
    error:"",
    loading: false
}


const verifyAccountReducer = (state=initialState, action)=>{
    const {payload, type} = action

    switch (type) {
        case VERIFY:
            return {
                ...state,
                loading: true
            }
        case VERIFY_FAILED:
            return{
                ...state,
                loading: false,
                error: payload,
                data: null
            }
        case VERIFY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: payload
            }
    
        default:
            return state;
    }
}

export default verifyAccountReducer