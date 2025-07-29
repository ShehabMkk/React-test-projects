import React, { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
  let [prodName, setProdName] = useState("Samsung");
  let [prodPrice, setProdPrice] = useState(3000);

  let [product, setProduct] = useState({
    id: 1,
    count: 235,
    pName: "Samsung",
    prodType: "Mobile",
    price: 5000,
    onSale: true,
  });

  return (
    <>
      <div className="text-2xl bg-info p-4">
        <h1>Parent</h1>
        <Child
          prodName={prodName}
          prodPrice={prodPrice}
          prodType="Mobile"
          productDetails={product}
        />
      </div>
    </>
  );
}
