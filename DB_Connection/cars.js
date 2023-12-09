import mongoose, { Schema } from "mongoose";

const cars = new Schema({
    make:String,
    model:String,
    p_year:Number,
    price:Number,
    color:String,
});

export const CarDetails = mongoose.model("cardetail",cars);