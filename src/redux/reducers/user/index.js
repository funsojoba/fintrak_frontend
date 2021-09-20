import { FETCH_USER, FETCH_USER_FAILED, FETCH_USER_SUCCESS } from "../../action/types";


const initialState = {
    loading: false,
    data: '',
    error: ''
}

const userReducer = (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case FETCH_USER:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: payload.data.data,
                error: null,
                loading: false
            }
        case FETCH_USER_FAILED:
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

export default userReducer