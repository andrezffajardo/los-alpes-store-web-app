import React from 'react';
import ProductCard from './ProductCard';

// ProductList component displays a list of product cards
const ProductList = ({ products, deleteProduct, editProduct }) => {
  return (
    <div className="row justify-content-center pt-5 m-3">
      {
        // Map through the products array and render a ProductCard component for each item
        products.map( (product) => (
          <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} editProduct={editProduct} />
        ))
      }
    </div>
  );
};

export default ProductList;