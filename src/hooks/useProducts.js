import { useState, useEffect } from "react";
import axios from 'axios';

export const useProducts = () => {

  const [product, setProduct] = useState([]);

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
    product
  }

}
