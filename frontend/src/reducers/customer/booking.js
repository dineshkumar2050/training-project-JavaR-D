import { BOOK_CAR } from "../../actions/types";

const initialState = {
    loading: true,
    bookings: [],
    error: '',
    successMsg: ''
}

export default function booking(state=initialState, action){
    const { type, payload } = action;
    switch(type){
        case BOOK_CAR:
            return { 
                ...state,
                loading: false,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '',
                bookings: payload && payload.data && payload.data.data ? payload.data.data : [] 
            }
            break;
        default:
            return { ...state }
            break;
    }
}
