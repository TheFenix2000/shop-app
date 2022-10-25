import React from "react";
import Products from "../Products.jsx/Products";
import "./Home.css";

function Home() {
  return (
    <div className="hero px-1">
      <div className="card text-bg-dark">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK THEM ALL</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
