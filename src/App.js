// src/App.js
import React from "react";
import ProductForm from "./Components/ProductFrom.jsx";
import ProductList from "./Components/ProductList.jsx";

const App = () => {
  const handleProductAdded = () => {
    // Refresh product list or trigger a fetch
    window.location.reload(); // Simple way to refresh the page (or you could lift state up)
  };

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm onProductAdded={handleProductAdded} />
      <ProductList />
    </div>
  );
};

export default App;
