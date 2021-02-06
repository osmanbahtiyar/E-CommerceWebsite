import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
    /**
     * the reducer takes two parameters an initial state and an action to dispatch (trigger) this reducer
     * at initial state products is an empty array
     * it takes payload info from productAction.js
     */
    switch (action.type) {
        /**
         * there are three types here
         * 1- PRODUCT_LIST_REQUEST
         * 2- PRODUCT_LIST_SUCCESS
         * 3- PRODUCT_LIST_FAIL
         */
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        /**
         * when it is fetching it says loading is true and products is an empty array
         */
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        /**
         * when it is in SUCCESS state loading is finished and products are products in action.payload
         */
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        /**
         * when an error occurs action returns an error message as payload
         */
        default:
            return state;
        /**
         * by default it returns the state which is normally initial state
         */
    }
};
