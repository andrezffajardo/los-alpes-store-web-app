import { useState, useEffect } from "react";
import axios from 'axios';

export const useProducts = () => {

  const [product, setProduct] = useState([]);

  const deleteProduct = async id => {
    try {
      await axios.delete(`https://6344456c242c1f347f82db0d.mockapi.io/api/v1/products/${id}`);
      setProduct(product.filter(p => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://6344456c242c1f347f82db0d.mockapi.io/api/v1/products/`);
        setProduct(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  const productCount = product.length;
  console.log(productCount);

  return {
    product,
    deleteProduct
  }

}
