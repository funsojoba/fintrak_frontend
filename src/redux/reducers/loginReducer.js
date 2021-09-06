import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN } from "../action/types"

const initialState = {
    token : localStorage.getItem('token'),
    data:'',
    loading: false,
    error: '',
    message: ''
}

const loginReducer = (state=initialState, action)=>{
    const {payload, type} = action

    switch (type) {
        case LOGIN:
            return {
                ...state,
                loading:true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.data.access)
            return{
                ...state,
                loading:false,
                data:payload.data,
                error:null,
                token:payload.data.access
            }
        case LOGIN_FAILED:
            return{
                ...state,
                loading:false,
                data:null,
                error:payload
            }
    
        default:
            return state
    }
}

export default loginReducer