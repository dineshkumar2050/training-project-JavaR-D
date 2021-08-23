import { REGISTER_USER } from "./types";
import api from "../utils/api";

export const registerUser = ({ name, userId, password, contact, address, isAdmin=false }) => async dispatch => {
    try{
        
        const data = {
            name,
            userId,
            password,
            contact,
            address,
            isAdmin
        }

        const res = await api.post('/register', data);

        dispatch({
            type: REGISTER_USER,
            payload: {
                data: res && res.data
            }
        })

    } catch(err){
        dispatch({
            type: REGISTER_USER,
            payload: {
                err
            }
        })
    }
}
