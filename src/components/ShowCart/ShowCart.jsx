import React from "react";

function ShowCart(props) {
  const product = props.data;
  return (
    <div className="row py-4 px-4 my-2 bg-light border border-dark rounded-2">
      <div className="col-md-4">
        <img src={product.image} alt={product.title} height={200} width={180} />
      </div>
      <div className="col-md-6">
        <h2 className="text-black-50">{product.title}</h2>
        <p className="lead fw-bold">
          {product.quantity} x $ {product.price} = $
          {(product.quantity * product.price).toFixed(2)}
        </p>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => props.handleRemove(product)}
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => props.handleAdd(product)}
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => props.handleClearItem(product)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowCart;
