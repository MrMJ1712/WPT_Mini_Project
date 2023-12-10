import mongoose, { Schema } from 'mongoose';

const car = new Schema({
    make: String,
    model: String,
    p_year: Number,
    price: Number,
    color: String,
    s_name: String,
    s_num: Number,
    s_add: String,
    s_city: String
});

export const CarDetails = mongoose.model('CarDetail', car);