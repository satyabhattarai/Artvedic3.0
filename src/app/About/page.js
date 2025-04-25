"use client";

import React, { useEffect, useState } from "react";

import { getProducts } from "../api/useractions";

const Page = () => {
  const [product, setProduct] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      setProduct(res);
    };
    fetchProducts();
  }, []);

  console.log(product);
  return <div></div>;
};

export default Page;
