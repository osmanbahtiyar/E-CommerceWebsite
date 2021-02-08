import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const quantity = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    /**
     * location is our quantity on URL when we send something like ?qty=1
     * for instance we send ?qty=1
     * we have to parse it and reach to the integer
     * when we split it with = , this function separates it like ['?qty', '1']
     * so to access integer we used array[1]
     */

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    /**
     * take cart state from store and destructuring assign to cartItems
     */

    const dispatch = useDispatch();
    /**
     * initialize a dispatch
     */
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity));
        }
    }, [dispatch, productId, quantity]);

    return <div>Cart</div>;
};

export default CartScreen;
