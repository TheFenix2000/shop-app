import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromCart,
  addToCart,
  clearItemFromCart,
  clearWholeCart,
} from "../../redux/action/products";
import EmptyCart from "../EmptyCart/EmptyCart";
import ShowCart from "../ShowCart/ShowCart";
import SubTotal from "../SubTotal/SubTotal";
import "./Cart.css";

function Cart() {
  const product = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const removeItem = (product) => {
    dispatch(deleteFromCart(product));
  };
  const addItem = (product) => {
    dispatch(addToCart(product));
  };
  const clearItem = (product) => {
    dispatch(clearItemFromCart(product));
  };
  const getSubTotal = () => {
    let subTotal = 0;
    product.map((x) => (subTotal += x.price * x.quantity));
    return subTotal;
  };
  const clearAllFromCart = () => {
    dispatch(clearWholeCart());
  };
  return (
    <div className="container py-5 my-5">
      {product.length > 0 ? (
        product.map((prod) => (
          <ShowCart
            handleRemove={removeItem}
            handleAdd={addItem}
            handleClearItem={clearItem}
            data={prod}
            key={prod.title}
          />
        ))
      ) : (
        <EmptyCart />
      )}
      {product.length > 0 ? (
        <SubTotal getTotalPrice={getSubTotal} clearCart={clearAllFromCart} />
      ) : null}
    </div>
  );
}

export default Cart;
