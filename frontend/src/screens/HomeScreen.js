import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    /*
    This is a react hooks and we can manage states in functional components with this
    products -> state variable
    setProducts -> function to change state variable
    useState([]) -> [] is initial state of state variable, it is an empty array 
    */

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('/api/products');
                setProducts(res.data);
            } catch {
                console.log("Products couldn't fetched in HomeScreen");
                setProducts([]);
            }
        };
        fetchProducts();
    }, []);
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
