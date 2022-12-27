import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://6344456c242c1f347f82db0d.mockapi.io/api/v1/products/';

const ProductManager = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(URL);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    fetchProduct();
  }, []);

  return { products, deleteProduct, editProduct};
};

export default ProductManager;
