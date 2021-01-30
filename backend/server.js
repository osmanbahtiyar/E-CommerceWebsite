const express = require('express');
const products = require('./data/products');

const app = express();
/*initialize an express app*/

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    /*This function returns all the product list as a json object to the frontend on /api/products path */
    res.json(products);
    /*Express converts a js object to json and sends it
    We have to parse and stringify json objects to use */
});

app.get('/api/products/:id', (req, res) => {
    /*This function returns the information of product which has the requested id */
    const my_product = products.find((p) => p._id === req.params.id);
    /*Array.find() function finds the elements in the array and return it */
    /*We can reach the requested id with req.params.id */
    res.json(my_product);
    /*Express converts this one element to a json file and sends it to frontend */
});

app.listen(5000, console.log('Server running on port 5000'));
/*Set server app to listen port 5000 manually*/
