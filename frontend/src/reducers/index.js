import { combineReducers } from 'redux';
import auth from './auth';
import cars from './admin/cars';
import customers from './admin/customers';
import transactions from './admin/transactions';
import booking from './user/booking';

export default combineReducers({
    auth,
    cars,
    customers,
    transactions,
    booking
});
