import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Image,
    ListGroup,
    ListGroupItem,
    Card,
    Button,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = (props) => {
    const [myProduct, setProduct] = useState({});
    /*
    this is a react hook and we can add state functionality to function components with it
    myProduct -> state variable
    setProduct -> function to change this state variable
    {} in useState is initial value of this state variable
    */

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(
                    `/api/products/${props.match.params.id}`
                );
                setProduct(res.data);
            } catch {
                console.log(`Product_id:${props.match.params.id} cannot found`);
                setProduct({});
            }
        };
        fetchProduct();
    }, []);
    /*
    useEffect functions are triggers when an event occur, these are dependencies in [] the second parameter. if it is empty they triggers only the component did mount
    useEffect takes an arrow function
    axios returns a promise to us so we have to handle it either with .then() statements or async await statements
    we can get url parameters with props.match.param.(parameter)
    */

    return (
        <>
            <Row>
                <Col md={6}>
                    <Image
                        src={myProduct.image}
                        alt={myProduct.name}
                        fluid
                    ></Image>
                    {/*Normally images extends its container to prevent this we used fluid */}
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{myProduct.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating
                                value={myProduct.rating}
                                numReviews={myProduct.numReviews}
                            />
                        </ListGroupItem>
                        <ListGroupItem>Price: ${myProduct.price}</ListGroupItem>
                        <ListGroupItem>
                            Description: {myProduct.description}
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
                                        <strong>${myProduct.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {myProduct.countInStock > 0
                                            ? 'In Stock'
                                            : 'Out of Stock'}
                                        {/*If stock count of product <= 0 it says out of stock */}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button
                                    variant='dark'
                                    block
                                    disabled={myProduct.countInStock === 0}
                                >
                                    {/*If stock is 0 add to cart button is disabled, block fits the button to entire block */}
                                    ADD TO CART
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
