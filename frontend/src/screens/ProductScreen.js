import React from 'react';
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
import products from '../products';

const ProductScreen = (props) => {
    const my_product = products.find((p) => p._id === props.match.params.id);
    return (
        <>
            <Row>
                <Col md={6}>
                    <Image
                        src={my_product.image}
                        alt={my_product.name}
                        fluid
                    ></Image>
                    {/*Normally images extends its container to prevent this we used fluid */}
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{my_product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating
                                value={my_product.rating}
                                numReviews={my_product.numReviews}
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${my_product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: {my_product.description}
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
                                        <strong>${my_product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {my_product.countInStock > 0
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
                                    disabled={my_product.countInStock === 0}
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
