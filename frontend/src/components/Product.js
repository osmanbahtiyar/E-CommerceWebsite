import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Link to={`/product/${props.product._id}`}>
                {/*Define all card object as a link */}
                <Card.Img variant='top' src={props.product.image} />
                <Card.Body>
                    <Card.Title as='h4'>{props.product.name}</Card.Title>
                    {/*Set title h4 */}
                    <Card.Subtitle className='mb-2 text-muted'>
                        {props.product.brand}
                        {/*Add a subtitle as brand */}
                    </Card.Subtitle>
                    <Card.Text>{props.product.description}</Card.Text>
                    <Card.Text>
                        <Rating
                            value={props.product.rating}
                            numReviews={props.product.numReviews}
                        />
                    </Card.Text>
                    <Card.Text as='h3'>${props.product.price}</Card.Text>
                    {/*Show item's price as h3 */}
                </Card.Body>
            </Link>
        </Card>
    );
};

export default Product;
