import api from '../utils/api';
import { LOGOUT, LOGIN } from './types';

export const login = (email, password) => async dispatch => {
    try{
        const body = { email, password };

        const res = await api.post('/auth', body);

        if(res && res.data && res.data.data && res.data.data.token){
            setAuthToken(res.data.data.token);
        }

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

export const logout = () => dispatch => {
    try{
        setAuthToken('');
        dispatch({ 
            type: LOGOUT 
        })
    } catch(err){
        dispatch({
            type: LOGIN,
            err
        });
    }
}
