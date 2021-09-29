import { DELETE_USER, DELETE_USER_FAILED, DELETE_USER_SUCCESS } from "../../action/types";


const initialState = {
    loading: false,
    data: '',
    error: ''
}


const deleteUserReducer = (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case DELETE_USER:
            return {
                ...state,
                loading: true
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                data: payload.data,
                error: null,
                loading: false
            }
        case DELETE_USER_FAILED:
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

export default deleteUserReducer