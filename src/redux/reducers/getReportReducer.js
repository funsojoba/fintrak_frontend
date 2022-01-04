import { GET_REPORT, GET_REPORT_FAILED, GET_REPORT_SUCCESS} from "../action/types"


const initialState = {
    loading: false,
    data:'',
    error:''
}

const reportReducer = (state=initialState, action)=>{
    const {payload, type} = action;

    switch(type){
        case GET_REPORT:
            return{
                ...state,
                loading:true
            }
        case GET_REPORT_FAILED:
            return{
                ...state,
                data:null,
                error:payload,
                loading:false,
            }
        case GET_REPORT_SUCCESS:
            return{
                ...state,
                data:payload,
                error:null,
                loading: false
            }
        default:
            return state
    }
}

export default reportReducer