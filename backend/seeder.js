import mongoose from 'mongoose';
import OrderModel from './models/orderModel.js';
import ProductModel from './models/productModel.js';
import UserModel from './models/userModel.js';
import products from './data/products.js';
import users from './data/users.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
/**
 * get MONGO_URI from .env
 */

connectDB();
/**
 * connect to database
 */

const importData = async () => {
    /**
     * this functions deletes all models in database and insert our local files
     */
    try {
        await OrderModel.deleteMany();
        await ProductModel.deleteMany();
        await UserModel.deleteMany();
        /**
         * delete all the models on database
         */

        const createdUsers = await UserModel.insertMany(users);
        /**
         * insert our local users to database
         * this function returns sended data and we store it in created user as an array
         */

        const adminUser = createdUsers[0]._id;
        /**
         * first user in this array is our admin user
         * in users.js we specified it with
         */

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
            /**
             * map all products and append their info with user: adminUser
             * with this we specified the admin user as owner of this products
             */
        });

        await ProductModel.insertMany(sampleProducts);
        /**
         * insert sampleProducts and console.log
         */
        console.log('Data Importted!');
        process.exit();
    } catch (error) {
        console.log('Error in data imported');
        process.exit(1);
    }
};

const destroyData = async () => {
    /**
     * in this function we deleted all models in database
     */
    try {
        await OrderModel.deleteMany();
        await ProductModel.deleteMany();
        await UserModel.deleteMany();
        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.log('Error in data destroy');
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    /**
     * we design command line arguments for this file
     * if user gives -d argument
     * runs destroyData() function
     * if gives no parameter it runs importData() function
     */
    destroyData();
} else {
    importData();
}
