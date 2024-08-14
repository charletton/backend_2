import mongoose from "mongoose";
import { cartService } from '../index.js'


const collection = 'Users';

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Carts'
    },
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

schema.pre('save', async function(next) {
    if (!this.cart) { 
        const newCart = await cartService.createCart({}); 
        this.cart = newCart._id; 
    }

    next();
});

const usersModel = mongoose.model(collection, schema);

export default usersModel;