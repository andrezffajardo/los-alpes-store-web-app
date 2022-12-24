import React, {useState} from 'react';
import {ProductList} from './/components/ProductList';
import { useProducts } from './/hooks/useProducts';


export function App({onDelete}) {
  const [products, setProducts] = useState([]);
  const {deleteProduct} = useProducts();

  return (
    <>
      <h1 className="text-center mt-3">Los Alpes Store - Product List</h1>
      <ProductList onDelete={deleteProduct} products={products} setProducts={setProducts}/>
    </>
  );
}

export default App;
