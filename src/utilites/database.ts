import mongoose from "mongoose";
import dotenv from 'dotenv';
import logger from "./logger";
dotenv.config();

const mongourl: string = process.env.MONGODB as string;


function ConnectDatabase(){
    try{
        mongoose.connect(mongourl);
        logger.info('Successfully connected to your database.');
    }catch(error)
    {logger.error(`There was an error while connecting to your database: ${error}` )};
}; 

export default ConnectDatabase;