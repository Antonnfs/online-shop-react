import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import IProduct from "../models";
import Categories from "../components/Categories";

export function useProducts() {
   const [products, setProducts] = useState<IProduct[]>([]);
   const [loader, setLoader] = useState(false);
   const [error, setError] = useState("");
   const [type, setType] = useState('')

   function addProduct(product:IProduct) {
      setProducts(prev => [...products, product])
   }

   async function getProducts() {
      try {
         setError("");
         setLoader(true);
         const response = await axios.get<IProduct[]>(
            `https://fakestoreapi.com/products${type}`
         );
         setProducts(response.data);
         setLoader(false);
         console.log(type);
      } catch (err: unknown) {
         const error = err as AxiosError;
         setLoader(false);
         setError(error.message);
      }
   }

   useEffect(() => {
      getProducts();
   }, [type]);

	return { products, error, loader, addProduct, type, setType, getProducts }
}
