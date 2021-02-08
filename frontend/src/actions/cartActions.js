import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    /**
     * we will save our cart to local storage and we want to access all states in redux so with getState param we access it with getState.stateName
     */
    const response = await axios.get(`/api/products/${id}`);
    /**
     * when addToCart function called this function fetches products data from backend
     */

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: response.data._id,
            name: response.data.name,
            image: response.data.image,
            price: response.data.price,
            countInStock: response.data.countInStock,
            qty: qty,
        },
    });
    /**
     * this dispatcher creates an object to pass reducer
     * and calls reducer
     * reducer adds the item to cartItems list in cart state
     */

    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
    /**
     * this function saves cart data to browser's local storage
     */
};

export const removeFromCart = (id) => (dispatch, getState) => {
    /**
     * this function removes an item from cart
     */
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: { id: id },
    });
    /**
     * dispatch creates an object to pass reducer with id of item which will be deleted
     * and calls reducer
     * reducer removes the item and sets new state
     */
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
    /**
     * after remove process this function saves the file to local storage
     */
};
