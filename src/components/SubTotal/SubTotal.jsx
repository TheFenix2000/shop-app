import React from "react";

function SubTotal(props) {
  let total = props.getTotalPrice();
  return (
    <>
      <div className="subTotal row py-4 px-4 my-2 bg-dark border border-dark rounded-2">
        <h3 className="lead fw-bold text-light text-end">
          Subtotal: $ {total.toFixed(2)}
        </h3>
        <div className="d-flex align-items-center justify-content-end">
          <button
            className="btn btn-outline-danger"
            onClick={() => props.clearCart()}
          >
            Clear cart <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default SubTotal;
