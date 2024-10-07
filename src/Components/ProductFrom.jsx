// src/components/ProductForm.js
import React, { useState } from "react";
import { createProduct } from "./../Services/ProductService";

const ProductForm = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [isQualified, setIsQualified] = useState(true);
  const [disqualificationReason, setDisqualificationReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      isQualified,
    };

    try {
      await createProduct(product, isQualified ? null : disqualificationReason);
      onProductAdded(); // Trigger the parent component to refresh the product list
      resetForm();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setIsQualified(true);
    setDisqualificationReason("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Mark Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Is Qualified:</label>
        <input
          type="checkbox"
          checked={isQualified}
          onChange={(e) => setIsQualified(e.target.checked)}
        />
      </div>
      {!isQualified && (
        <div>
          <label>Disqualification Reason:</label>
          <input
            type="text"
            value={disqualificationReason}
            onChange={(e) => setDisqualificationReason(e.target.value)}
            required
          />
        </div>
      )}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
