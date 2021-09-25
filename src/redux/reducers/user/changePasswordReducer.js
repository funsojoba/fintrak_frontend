import { CHANGE_PASSWORD, CHANGE_PASSWORD_FAILED, CHANGE_PASSWORD_SUCCESS } from "../../action/types";


const initialState = {
    loading: false,
    data: '',
    error: ''
}


const changePasswordReducer = (state=initialState, action)=>{
    const { payload, type } = action

    switch (type) {
        case CHANGE_PASSWORD:
            return {
                ...state,
                loading: true
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                data: payload.data,
                error: null,
                loading: false
            }
        case CHANGE_PASSWORD_FAILED:
            return {
                ...state,
                data: null,
                error: payload,
                loading: false
            }

        default:
            return state;
    }
}

export default changePasswordReducer