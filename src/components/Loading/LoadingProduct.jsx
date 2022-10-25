import React from "react";
import Skeleton from "react-loading-skeleton";

function LoadingProduct() {
  return (
    <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <Skeleton height={100} width={600} />
        <Skeleton height={25} width={150} />
        <Skeleton height={30} width={650} />
        <Skeleton height={70} width={650} />
        <Skeleton height={170} width={650} />
        <div className="d-flex align-items-center justify-center">
          <Skeleton height={50} width={150} />
          <Skeleton height={50} width={150} style={{ marginLeft: 6 }} />
        </div>
      </div>
    </>
  );
}

export default LoadingProduct;
