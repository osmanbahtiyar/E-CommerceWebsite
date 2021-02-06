import axios from 'axios';
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    /**
     * when we use dispatch we send data from here to reducer
     */
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const response = await axios.get('/api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: response.data,
        });
        /**
         * when we use listProducts
         * first of all we set the type as PRODUCT_LIST_REQUEST and so productListReducer goes this case
         * secondly we fetch data from backend with axios and take it to data
         * then we set type as PRODUCT_LIST_SUCCESS and payload as data from backend so productListReducer goes this case and sets page's products state as payload
         * axios returns a closure object our main objects are inside of it under data field so we use response.data to achieve it
         */
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        /**
         * if any error occurs this set type as PRODUCT_LIST_FAIL and send error message in payload and productListReducer shows this message
         */
    }
};
