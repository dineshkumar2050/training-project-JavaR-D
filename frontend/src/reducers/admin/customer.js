import { EDIT_USER, DELETE_USER, BLOCK_USER, GET_ALL_USERS } from "../../actions/types";

const initialState = {
    loading: true,
    customers: [],
    error: '',
    successMsg: ''
}

export default function customers(state=initialState, action){
    const { type, payload } = action;
    switch(type){
        case GET_ALL_USERS:
            return {
                ...state,
                loading: false,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '',
                customers: payload && payload.data && payload.data.data ? payload.data.data : [] 
            }
            break;
        case EDIT_USER:
            return { 
                ...state,
                loading: false,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : ''
            }
            break;
        case DELETE_USER:
            return { 
                ...state,
                loading: false,
                error: payload && payload.error,
                successMsg: payload && payload.data && payload.data.successMsg
            }
            break;
        case BLOCK_USER:
            return { 
                ...state,
                loading: false,
                error: payload && payload.error,
                successMsg: payload && payload.data && payload.data.successMsg
            }
            break;
        default:
            return { ...state }
            break;
    }
}
