import { useState, useEffect } from "react";
import axios from "axios";

const useGetOneProduct = (id) => {
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null); 

  const increase = () => setQty((prev) => prev + 1);
  const decrease = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  return {
    data,
    isLoading,
    qty,
    increase,
    decrease,
    setQty, 
  };
};

export default useGetOneProduct;