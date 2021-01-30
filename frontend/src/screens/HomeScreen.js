import React from 'react';
import products from '../products';
//this is our data
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        {/*Purpose of sm md lg xl is responsive mobile first design */}
                        {/*This is bootstrap 12 grid system you have to make rows and cols for responsive design they can be also wrapped by a container */}
                        {/*Every col element should have a unique key element, we've used the id here */}
                        <Product product={product} />
                        {/*We've created a product component and give the props as an product object */}
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
