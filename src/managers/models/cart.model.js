import mongoose from "mongoose";

const collection = "Carts";

const schema = new mongoose.Schema({
  products: [
    {
      product: {
        type: Number,
        default: null  
      },
      quantity: {
        type: Number,
        default: null
      }
    }
  ],
});


const cartModel = new mongoose.model(collection, schema);
export default cartModel;