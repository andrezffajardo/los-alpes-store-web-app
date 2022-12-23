import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductsWebApp  from './ProductsWebApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsWebApp />
  </React.StrictMode>
);
