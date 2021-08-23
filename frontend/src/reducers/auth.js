import { LOGIN, REGISTER_USER, LOGOUT } from "../../actions/types";

const initialState = {
    loading: true,
    token: '',
    user: {},
    error: '',
    successMsg: '',
    refreshToken: ''
}

export default function auth(state=initialState, action){
    const { type, payload } = action;
    switch(type){
        case LOGIN:
            return { 
                ...state,
                loading: false,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '',
                token: payload && payload.data && payload.data.successMsg ? localStorage.getItem('token') : '',
                user: payload && payload.data && payload.data.data ? payload.data.data : {}, 
            }
            break;
        case REGISTER_USER:
            return { 
                ...state,
                loading: false,
                error: payload && payload.error ? payload.error : '',
                successMsg: payload && payload.data && payload.data.successMsg ? payload.data.successMsg : '' 
            }
            break;
        case LOGOUT:
            return { 
                ...state,
                loading: false,
                token: '',
                user: {},
                error: '',
                successMsg: '',
                refreshToken: ''
            }
            break;
        default:
            return { ...state }
            break;
    }
}
