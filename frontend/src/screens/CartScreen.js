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
    ListGroupItem,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

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

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
        /**
         * this function calls removeFromCart action
         */
    };

    const checkoutHandler = () => {
        props.history.push('/login?redirect=shipping');
        /**
         * if you are not logged in go to login
         * if you are logged in go to shipping
         */
    };

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty! <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item) => (
                            <ListGroupItem key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fluid
                                            rounded
                                        ></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>
                                            {item.name}
                                        </Link>
                                    </Col>
                                    <Col md={2}>{item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as='select'
                                            value={item.qty}
                                            onChange={(event) =>
                                                dispatch(
                                                    addToCart(
                                                        item.product,
                                                        Number(
                                                            event.target.value
                                                        )
                                                    )
                                                )
                                            }
                                        >
                                            {[
                                                ...Array(
                                                    item.countInStock
                                                ).keys(),
                                            ].map((x) => (
                                                <option
                                                    key={x + 1}
                                                    value={x + 1}
                                                >
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() =>
                                                removeFromCartHandler(
                                                    item.product
                                                )
                                            }
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h2>
                            Subtotal (
                            {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                            ) items
                        </h2>
                        $
                        {cartItems
                            .reduce(
                                (acc, item) => acc + item.qty * item.price,
                                0
                            )
                            .toFixed(2)}
                    </ListGroupItem>
                    {/**
                     * Array.reduce function makes some calculations over acc param , 0 is initial value
                     * toFix(2) makes .00 precision
                     */}
                    <ListGroupItem>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    );
};

export default CartScreen;
