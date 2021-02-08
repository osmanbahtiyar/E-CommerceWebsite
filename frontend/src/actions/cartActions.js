import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    /**
     * we will save our cart to local storage and we want to access all states in redux so with getState param we access it with getState.stateName
     */
    const response = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: response.data.id,
            name: response.data.name,
            image: response.data.image,
            price: response.data.price,
            countInStock: response.data.countInStock,
            qty: qty,
        },
    });

    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
};
