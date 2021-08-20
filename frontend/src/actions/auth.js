import api from '../utils/api';
import { LOGOUT, LOGIN } from './types';

export const login = (email, password) => async dispatch => {
    try{
        const body = { email, password };

        const res = await api.post('/auth', body);

        dispatch({
            type: LOGIN,
            payload: res.data
        })

    } catch(err){       

        dispatch({
            type: LOGIN,
            err
        });
    }

}

export const logout = () => ({ type: LOGOUT });
