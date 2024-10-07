// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import { getProducts } from "../Services/ProductService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            {product.name} -{" "}
            {product.isQualified ? "Qualified" : "Disqualified"}
            {!product.isQualified && <span> (Reason: {product.reason})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
