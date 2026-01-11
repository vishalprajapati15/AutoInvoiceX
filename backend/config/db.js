import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:process.env.DB_NAME
        })
        .then(()=>{
            console.log("DB Connected Successfully !!");
        });
    } catch (error) {
        console.log("DB Connection failed !!");
    }
}