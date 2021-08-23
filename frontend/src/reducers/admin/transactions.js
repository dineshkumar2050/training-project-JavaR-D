import { SHOW_TRANSACTION_REPORTS } from "../../actions/types";

const initialState = {
    loading: true,
    transactions: [],
    error: '',
    successMsg: ''
}

export default function transactions(state=initialState, action){
    const { type, payload } = action;
    switch(type){
        case SHOW_TRANSACTION_REPORTS:
            return { 
                ...state,
                loading: false,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '',
                transactions: payload && payload.data && payload.data.data ? payload.data.data : [] 
            }
            break;
        default:
            return { ...state }
            break;
    }
}
