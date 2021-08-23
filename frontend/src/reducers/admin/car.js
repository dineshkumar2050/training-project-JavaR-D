import { EDIT_CAR, DELETE_CAR, ADD_CAR, SHOW_AVAILABLE_CARS } from "../../actions/types";

const initialState = {
    loading: true,
    cars: [],
    error: '',
    successMsg: ''
}

export default function cars(state=initialState, action) {
    const { type, payload } = action;
    switch(type){
        case SHOW_AVAILABLE_CARS:
            return{
                ...state,
                cars: payload && payload.data && payload.data.data ? payload.data.data : [],
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '',
                loading: false
            }
            break;
        case EDIT_CAR:
            return {
                ...state,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '',
                loading: false
            }
            break;
        case DELETE_CAR:
            return {
                ...state,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '',
                loading: false
            }
            break;
        case ADD_CAR:
            return {
                ...state,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '',
                loading: false
            }
            break;
        default:
            return { ...state }
            break;
    }
}
