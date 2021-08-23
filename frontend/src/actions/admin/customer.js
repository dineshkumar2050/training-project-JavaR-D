import { UPDATE_USER, DELETE_USER, BLOCK_USER, GET_ALL_USERS } from '../types';
import api from '../../utils/api';

export const getAllUsers = () => async dispatch => {
    try{
        const res = await api.get('/auth/admin/customer');

        dispatch({
            type: GET_ALL_USERS,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: GET_ALL_USERS,
            payload: {
                error: err
            }
        })
    }
}

export const blockUser = id => async dispatch => {
    try{
        const res = await api.put(`/auth/admin/customer/block/${id}`);

        dispatch({
            type: BLOCK_USER,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: BLOCK_USER,
            payload: {
                error: err
            }
        })
    }
}

// export const addCar = ({ name, imageUrl, bookingType, status, priceByType }) => async dispatch => {
//     try{
//         const data = { name, imageUrl, bookingType, status, priceByType };
//         const res = await api.post('/auth/admin/car', data);

//         dispatch({
//             type: ADD_CAR,
//             payload: {
//                 data: res && res.data
//             }
//         })
//     } catch(err){
//         dispatch({
//             type: ADD_CAR,
//             payload: {
//                 error: err
//             }
//         })
//     }
// }

export const editUser = (id, data) => async dispatch => {
    try{
        const res = await api.put(`/auth/admin/customer/${id}`, data);

        dispatch({
            type: UPDATE_USER,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: UPDATE_USER,
            payload: {
                error: err
            }
        })
    }
}

export const deleteUser = id => async dispatch => {
    try{
        const res = await api.delete(`/auth/admin/customer/${id}`);

        dispatch({
            type: DELETE_USER,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: DELETE_USER,
            payload: {
                error: err
            }
        })
    }
}
