import mongoose from 'mongoose';

const connectDB = async () => {
    /*MongoDB returns us promises so we have to use async await functions */

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        /*
        mongoose.connect takes two parameters
        1-> Connection URI, we gave it from .env file
        2-> Optional parameters if we don't give them like above, it gives error on shell
        */
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        /*
        print the connected host info
        */
    } catch (error) {
        console.log(`Error: ${error.massage}`);
        process.exit(1);
        /* 
        if an error occurs it prints the error message and exit process
        */
    }
};

export default connectDB;
