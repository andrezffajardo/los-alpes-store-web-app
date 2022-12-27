import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, deleteProduct, editProduct }) => {
  return (
    <div className="row justify-content-center pt-5 m-3">
      {
        products.map( (product) => (
          <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} editProduct={editProduct} />
        ))
      }
    </div>
  );
};

export default ProductList;