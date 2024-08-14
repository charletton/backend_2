import cartModel from "./models/cart.model.js";

export default class CartModel {
    createCart(cart){
        return cartModel.create(cart);
    }
}
