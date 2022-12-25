import React from 'react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts';

export const ProductList= () => {

  const { product, deleteProduct } = useProducts();

  console.log(product);

  return (
    <div className="row justify-content-center pt-5">
      {
        product.map( product => (
        <div  className="p-3" key={product.id} >
          <ProductCard product={product} deleteProduct={deleteProduct}/>
        </div>
      ))
      }
    </div>
  );
}