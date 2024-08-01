import mongoose from "mongoose";
const collection = 'Users';

const schema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    age: {
        type: Number,
        required: true,
    },
    cart: {

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})

const usersModel = mongoose.model(collection,schema);

export default usersModel;
