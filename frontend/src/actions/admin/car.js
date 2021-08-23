import { ADD_CAR, EDIT_CAR, DELETE_CAR, SHOW_AVAILABLE_CARS } from '../types';
import api from '../../utils/api';

export const getAllCars = () => async dispatch => {
    try{
        const res = await api.get('/auth/admin/car', data);

        dispatch({
            type: SHOW_AVAILABLE_CARS,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: SHOW_AVAILABLE_CARS,
            payload: {
                error: err
            }
        })
    }
}

export const addCar = ({ name, imageUrl, bookingType, status, priceByType }) => async dispatch => {
    try{
        const data = { name, imageUrl, bookingType, status, priceByType };
        const res = await api.post('/auth/admin/car', data);

        dispatch({
            type: ADD_CAR,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: ADD_CAR,
            payload: {
                error: err
            }
        })
    }
}

export const editCar = (id, data) => async dispatch => {
    try{
        const res = await api.put(`/auth/admin/car/${id}`, data);

        dispatch({
            type: EDIT_CAR,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: EDIT_CAR,
            payload: {
                error: err
            }
        })
    }
}

export const deleteCar = id => async dispatch => {
    try{
        const res = await api.delete(`/auth/admin/car/${id}`);

        dispatch({
            type: DELETE_CAR,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: DELETE_CAR,
            payload: {
                error: err
            }
        })
    }
}
