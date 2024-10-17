import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const connectDB = async () => {
    mongoose
        .connect(`${process.env.URI}`) 
        .then(() => console.log('Connected to MongoDB')) 
        .catch((error) => console.log(error)); 
};

export default connectDB;