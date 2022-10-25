import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/action/products";
import ShowProduct from "../ShowProduct/ShowProduct";
import LoadingProduct from "../Loading/LoadingProduct";

function Product() {
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      setProductLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(await response.json());
      setProductLoading(false);
    };
    getProduct();
  }, [dispatch, productId]);

  return (
    <div className="container my-5 py-5">
      <div className="row">
        {productLoading ? (
          <LoadingProduct />
        ) : (
          <ShowProduct myAddProduct={addProduct} data={product} />
        )}
      </div>
    </div>
  );
}

export default Product;
