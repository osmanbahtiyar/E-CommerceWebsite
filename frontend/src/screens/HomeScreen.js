import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
    const dispatch = useDispatch();
    /**
     * we initialized a dispatcher
     */
    const productList = useSelector((state) => state.productList);
    /**
     * we initialize a selector to use a state -> productList from store.js it is a reducer
     */
    const { loading, error, products } = productList;
    /**
     * destructuring productList object with possible values
     * we have defined loading, error and products attributes in productReducer.js
     */
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    /*
    useEffect is a hook. It takes an arrow function as parameter and when this react component HomeScreen runs, initially this arrow function runs 
    in useEffect we will make some get request and this returns us a promise, so we have to make a .then syntax or make a async wait syntax
    we can type async before the unnamed arrow function in useEffect so, we have to make a new arrow function in this arrow function and call it in this function also
    axios.get returns us a promise res and we get it with res (we can take it with also {data} destructuring)
    and when we want to access data in it we must res.data (if we've used destructuring, we would use data only)
    and then we called fetchProducts()
    second parameter of useEffect is dependencies so when one of the dependencies changes use effect will triggered again
    we must use try cath blocks around await functions
    */

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
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
            )}
        </>
    );
};
/**
 * if state is loading it prints loading
 * if there is an error it prints error
 * if everything is ok it prints page components
 */

export default HomeScreen;
