import React,{ useState } from 'react';
import Navbar from './/components/Navbar';
import ProductList from './/components/ProductList';
import useProductController from './/hooks/useProductController';


const ProductsWebApp = () => {

    const [ search, setSearch ] = useState("");
    const { products, deleteProduct, editProduct } = useProductController();

    const searcher = (e) => {
      setSearch(e.target.value);
    };

    let results = [];
    if(!search)
    {
      results = products
    } else {
      results = products.filter( (data) =>
      data.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
    };


  return (
    <div>
      {/* Navbar component */}
      <Navbar searcher={ searcher }/>

      {/* //ProductList component */}
      <ProductList key={products.id} products={results} deleteProduct={deleteProduct} editProduct={editProduct} />
    </div>
  );
};

export default ProductsWebApp;
