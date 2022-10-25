import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">Your cart is empty</h1>
          <p className="fs-3">
            <span className="text-danger">Opps!</span> No items found.
          </p>
          <p className="lead">You didn't add any items to the cart.</p>
          <Link to="/" className="btn btn-outline-dark">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
