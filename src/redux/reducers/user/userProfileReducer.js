import { ADD_USER_PROFILE, ADD_USER_PROFILE_SUCCESS, ADD_USER_PROFILE_FAILED} from "../../action/types";


const initialState = {
    loading: false,
    data: '',
    error: ''
}

const userProfileReducer = (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case ADD_USER_PROFILE:
            return {
                ...state,
                loading: true
            }
        case ADD_USER_PROFILE_SUCCESS:
            return {
                ...state,
                data: payload.data.data,
                error: null,
                loading: false
            }
        case ADD_USER_PROFILE_FAILED:
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

export default userProfileReducer