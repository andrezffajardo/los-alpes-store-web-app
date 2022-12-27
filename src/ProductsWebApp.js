import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './/components/Navbar';
import ProductList from './/components/ProductList';


const ProductsWebApp = () => {

    const [ products, setProducts ] = useState([]);
    const [ search, setSearch ] = useState("");

    const URL = 'https://6344456c242c1f347f82db0d.mockapi.io/api/v1/products/';

    const fetchProduct = async () => {
      try {
        const response = await axios.get(URL);
        setProducts(response.data)
      } catch (error) {
        console.error(error);
      }
    };

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

    useEffect(() => {
      fetchProduct()
    }, []);


    const deleteProduct = async id => {
      try {
        await axios.delete(`${URL}${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        console.error(error);
      }
    };

    const editProduct = async (id, updatedProduct) => {
      try {
        await axios.put(`${URL}${id}`, updatedProduct);
        setProducts(prevProduct => prevProduct.map(p => p.id === id ? updatedProduct : p));
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <div>
      {/* Navbar component */}
      <Navbar searcher={ searcher }/>

      {/* //ProductList component */}
      <ProductList key={products.id} products={results} deleteProduct={deleteProduct} editProduct={editProduct}/>
    </div>
  );
};

export default ProductsWebApp;
