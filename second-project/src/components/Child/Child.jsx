import React from "react";

export default function Child({ productDetails }) {
  let { pName, price, prodType, count } = productDetails;

  return (
    <>
      {/* <h1 className="bg-warning">Product Name: {item.prodName}</h1>
      <h3 className="bg-warning">Product Price: {item.prodPrice} </h3>
      <h4 className="bg-warning">Product Type: {item.prodType} </h4> */}

      <h1 className="bg-warning">Product Name: {pName}</h1>
      <h2 className="bg-warning">Product Type: {prodType}</h2>
      <h3 className="bg-warning">Product Price: {price}</h3>
      <h4 className="bg-warning">Product Count: {count}</h4>
    </>
  );
}
