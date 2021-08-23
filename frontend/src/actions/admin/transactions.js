import { SHOW_TRANSACTION_REPORTS } from '../types';
import api from '../../utils/api';

export const showTransactionReports = () => async dispatch => {
    try{
        const res = await api.get('/auth/admin/transactions');

        dispatch({
            type: SHOW_TRANSACTION_REPORTS,
            payload: {
                data: res && res.data
            }
        })
    } catch(err){
        dispatch({
            type: SHOW_TRANSACTION_REPORTS,
            payload: {
                error: err
            }
        })
    }
}
