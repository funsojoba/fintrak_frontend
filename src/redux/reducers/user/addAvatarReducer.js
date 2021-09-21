import { ADD_AVATAR, ADD_AVATAR_FAILED, ADD_AVATAR_SUCCESS } from "../../action/types";

const initialState = {
    loading: false,
    data: '',
    error: ''
}

const addAvatarReducer = (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case ADD_AVATAR:
            return {
                ...state,
                loading: true
            }
        case ADD_AVATAR_SUCCESS:
            return {
                ...state,
                data: payload.data.data,
                error: null,
                loading: false
            }
        case ADD_AVATAR_FAILED:
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

export default addAvatarReducer