import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import ShowProducts from "../ShowProducts/ShowProducts";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((product) => product.category === cat);
    setFilter(updatedList);
  };
  const mySetFilter = (data) => {
    setFilter(data);
  };
  const location = useLocation();
  return (
    <div>
      <div className="container my-7 py-10">
        <div className="row">
          <div
            className={`col-12 mb-8 ${
              location.pathname !== "/" ? "py-5 my-5" : "py-3"
            }`}
          >
            <h1 className="display-6 fw-bolder text-center">Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : (
            <ShowProducts
              core={data}
              data={filter}
              myFunction={mySetFilter}
              myFilter={filterProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
