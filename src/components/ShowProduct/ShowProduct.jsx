import React from "react";
import { Link } from "react-router-dom";

function ShowProduct(props) {
  return (
    <>
      <div className="col-md-6">
        <img
          src={props.data.image}
          alt={props.data.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h1 className="text-uppercase text-black-50">{props.data.title}</h1>
        <h5 className="fw-light text-black-50">{props.data.category}</h5>
        <h4 className="lead fw-bolder">
          Rating: {props.data.rating && props.data.rating.rate}
          <i className="fa fa-star"></i>
        </h4>
        <h3 className="display-6 fw-bold my-4">$ {props.data.price}</h3>
        <p className="lead">{props.data.description}</p>
        <button
          className="btn btn-outline-dark px-4 py-2"
          onClick={() => props.myAddProduct(props.data)}
        >
          Add to Cart
        </button>
        <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
          Go to Cart
        </Link>
      </div>
    </>
  );
}

export default ShowProduct;
