import React from 'react';
import {ProductCard} from './ProductCard';
import { useProducts } from '../hooks/useProducts';

export const ProductList= () => {

  const {product} = useProducts();

  return (
    <div className="row mx-3">
      {
        product.map( product => (
        <div key={product.id} className="col-sm-3">
          <ProductCard product={product}/>
        </div>
      ))
      }
    </div>
  );
}