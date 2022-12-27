import { useState, useEffect } from 'react';
import axios from 'axios';

// The URL for the mock API endpoint for products
const URL = 'https://6344456c242c1f347f82db0d.mockapi.io/api/v1/products/';

// useProductController hook component manages the state for a list of products
// and provides functions for fetching, deleting, and updating the products
const useProductController = () => {
  // The products state variable stores the list of products
  const [products, setProducts] = useState([]);

  // fetchProduct function get the list of products from the API
  const fetchProduct = async () => {
    try {
      // Make a GET request to the API to retrieve the list of products
      const response = await axios.get(URL);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // deleteProduct function deletes a product from the API and updates the products state
  const deleteProduct = async id => {
    try {
      // Make a DELETE request to the API to delete the product with the specified id
      await axios.delete(`${URL}${id}`);
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // editProduct function updates a product in the API and updates the products state
  const editProduct = async (id, updatedProduct) => {
    try {
      // Make a PUT request to the API to update the product with the specified id
      await axios.put(`${URL}${id}`, updatedProduct);
      setProducts(prevProduct => prevProduct.map(p => p.id === id ? updatedProduct : p));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { products, deleteProduct, editProduct};
};

export default useProductController;
