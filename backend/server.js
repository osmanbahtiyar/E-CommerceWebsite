import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
//initialize the dotenv

connectDB();
/*Connect to the database */

const app = express();
/*initialize an express app*/

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
/*
we used express module in productRoutes.js file
*/
app.use(notFound);
/**
 * middleware functions run in order
 * they passes a next function to another
 * this generates notfound error and sends the error to errorHandler
 */
app.use(errorHandler);
/**
 * final error handler
 * error handler middleware functions are generally written at the end of the file
 */

const PORT = process.env.PORT || 5000;
/*it takes the port info from env file. if it don't exist, it sets 5000 */

app.listen(
    PORT,
    console.log(`Server running on ${process.env.NODE_ENV} port ${PORT}`)
);
/*Set server app to listen port 5000 manually*/
