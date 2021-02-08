import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Image,
    ListGroup,
    ListGroupItem,
    Card,
    Button,
    Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = (props) => {
    const [qty, setQty] = useState(0);
    /**
     * this is a component level state and we used it for product quantity
     */

    const dispatch = useDispatch();
    /**
     * we use dispatcher to use redux actions
     */

    const productDetails = useSelector((state) => state.productDetails);
    /**
     * we use useSelector to get state from store.js
     */

    const { loading, error, product } = productDetails;
    /**
     * destructuring the fetched data from reducer
     */

    useEffect(() => {
        dispatch(listProductsDetails(props.match.params.id));
        /**
         * dispatch listProductDetails action with id parameter
         */
    }, [props.match, dispatch]);
    /*
    useEffect functions are triggers when an event occur, these are dependencies in [] the second parameter. if it is empty they triggers only the component did mount
    useEffect takes an arrow function
    axios returns a promise to us so we have to handle it either with .then() statements or async await statements
    we can get url parameters with props.match.param.(parameter)
    [props.match.params.id] is the dependency for useEffect when it is changed, useEffect is triggered 
    */

    const addToCartHandler = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            fluid
                        ></Image>
                        {/*Normally images extends its container to prevent this we used fluid */}
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <h3>{product.name}</h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Rating
                                    value={product.rating}
                                    numReviews={product.numReviews}
                                />
                            </ListGroupItem>
                            <ListGroupItem>
                                Price: ${product.price}
                            </ListGroupItem>
                            <ListGroupItem>
                                Description: {product.description}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <Row>
                                        <Col>Price: </Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0
                                                ? 'In Stock'
                                                : 'Out of Stock'}
                                            {/*If stock count of product <= 0 it says out of stock */}
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                {product.countInStock > 0 && (
                                    <ListGroupItem>
                                        <Row>
                                            <Col style={{ paddingTop: '10px' }}>
                                                Quantity
                                            </Col>
                                            <Col>
                                                <Form.Control
                                                    as='select'
                                                    value={qty}
                                                    onChange={(event) =>
                                                        setQty(
                                                            event.target.value
                                                        )
                                                    }
                                                >
                                                    {[
                                                        ...Array(
                                                            product.countInStock
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
                                        </Row>
                                    </ListGroupItem>
                                )}
                                {/**
                                 * if it's stock is grater than 0 create a quantity row and list its quantity
                                 * for listing quantity create an array with countInStock value and use it with index + 1
                                 * quantity starts with 1 not 0
                                 */}
                                <ListGroupItem>
                                    <Button
                                        variant='dark'
                                        block
                                        disabled={product.countInStock === 0}
                                        onClick={addToCartHandler}
                                    >
                                        {/*If stock is 0 add to cart button is disabled, block fits the button to entire block */}
                                        ADD TO CART
                                    </Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProductScreen;
