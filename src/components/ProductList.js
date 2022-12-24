import React from 'react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts';

export const ProductList= () => {

  const { product, deleteProduct } = useProducts();

  console.log(product);

  return (
    <div className="row mx-3">
      {
        product.map( product => (
        <div key={product.id} className="col-sm-3">
          <ProductCard product={product} deleteProduct={deleteProduct}/>
        </div>
      ))
      }
    </div>
  );
}