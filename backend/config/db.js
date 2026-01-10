import mongoose from "mongoose";
export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kartiksingh0737_db_user:QzqfJsCAXoS7qlHR@cluster0.uhqp1o4.mongodb.net/Invoice')
    .then(()=>{
        console.log("DB Connected Successfully !!");
    })
}