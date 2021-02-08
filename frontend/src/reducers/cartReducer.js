import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            /**
             * if we are adding an item to the cart we have to take payload info from cartAction
             */
            const existItem = state.cartItems.find(
                (x) => x.product === item.product
            );
            /**
             * search the item in state cart items
             */

            if (existItem) {
                /**
                 * if this item has already exist
                 */
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.product !== action.payload.id
                ),
            };
        /**
         * this function filters given parameter with payload object
         */
        default:
            return state;
    }
};
