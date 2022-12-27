import React,{ useState } from 'react';
import Navbar from './/components/Navbar';
import ProductList from './/components/ProductList';
import useProductController from './/hooks/useProductController';

// ProductsWebApp component is the main container for the web app
const ProductsWebApp = () => {

    const [ search, setSearch ] = useState("");
     // The products and related functions are retrieved from the useProductController hook
    const { products, deleteProduct, editProduct } = useProductController();

    // The searcher function is called when the search input value is changed
    const searcher = (e) => {
      setSearch(e.target.value);
    };

     // Initialize the results array to the full list of products
    let results = [];
    if(!search)
    {
      results = products
    } else {
      // filter the products list to only include those that match the search query
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
