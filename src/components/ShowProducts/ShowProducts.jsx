import React from "react";
import { Link } from "react-router-dom";
function ShowProducts(props) {
  return (
    <>
      <div className="buttons d-flex justify-content-center">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            console.log(props.data);
            props.myFunction(props.core);
          }}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => props.myFilter("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => props.myFilter("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => props.myFilter("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => props.myFilter("electronics")}
        >
          Electronics
        </button>
      </div>
      {props.data.map((product) => {
        return (
          <>
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body d-flex justify-content-between flex-column align-center">
                  <h5 className="card-title mb-0">{product.title}</h5>
                  <div className="d-flex flex-column align-item-center">
                    <p className="card-text align-self-end py-2 lead fw-bold">
                      ${product.price}
                    </p>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ShowProducts;
