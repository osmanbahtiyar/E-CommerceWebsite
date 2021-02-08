import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    productListReducer,
    productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});
/**
 * we pass our reducers to combineReducer method and it creates a reducer
 */

const cartItemsFromStorage = localStorage.getItem('cartItem')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
/**
 * get saved cart from local storage
 * it saves as string so we have to parse it to JSON
 */

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
};
/**
 * this is our initial state when a redux component initialized it would created with this state
 * we set the cart state from local storage
 */

const middleware = [thunk];
/**
 * thunk is a middleware component
 */

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
/**
 * we create a store with this parameters
 * reducer is our reducers
 * initial state is our starting state
 * we have to add composeWithDevTools to connect chrome redux-dev-tools and we added thunk middleware to this.
 */

export default store;
