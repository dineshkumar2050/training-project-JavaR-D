import { BOOK_CAR } from "../types";
import api from "../../utils/api";

export const bookCar = ({ user, car, bookingType, paymentStatus, modeOfPayment, bookingPrice }) => async dispatch => {
    try{
        const data = { user, car, bookingType, paymentStatus, modeOfPayment, bookingPrice };

        const res = await api.post('/auth/customer/booking', data);

        dispatch({
            type: BOOK_CAR,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: BOOK_CAR,
            payload: {
                error: err
            }
        });
    }
}
