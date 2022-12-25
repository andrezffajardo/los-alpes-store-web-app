import React, {useState} from 'react';
import {Navbar} from './/components/Navbar';
import {ProductList} from './/components/ProductList';
import { useProducts } from './/hooks/useProducts';


export function App({onDelete}) {
  const [products, setProducts] = useState([]);
  const {deleteProduct} = useProducts();

  return (
    <>
      <Navbar/>
      <ProductList onDelete={deleteProduct} products={products} setProducts={setProducts}/>
    </>
  );
}

export default App;
