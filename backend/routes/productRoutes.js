import express from 'express';
import Product from '../models/productModel.js';
//import model to use in database
import asyncHandler from 'express-async-handler';

const router = express.Router();

/**
 * @desc Fetch all products
 * @route GET /api/products
 * @access Public
 */
router.get(
    '/',
    asyncHandler(async (req, res) => {
        /*This function returns all the product list as a json object to the frontend on /api/products path */
        const products = await Product.find({});
        /**
         * This Product.find({}) returns all elements in Product model
         * this is a promise so we have to you async await
         */

        res.json(products);
        /*Express converts a js object to json and sends it
    We have to parse and stringify json objects to use */
    })
);

/**
 * @desc Fetch single product
 * @route GET /api/products/:id
 * @access Public
 */
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        /*This function returns the information of product which has the requested id */
        const my_product = await Product.findById(req.params.id);

        if (my_product) {
            res.json(my_product);
            /*Express converts this one element to a json file and sends it to frontend */
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    })
);

export default router;
