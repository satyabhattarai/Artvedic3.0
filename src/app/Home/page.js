"use server";

import Card from "@/Components/Card";
import React from "react";
import UploadForm from "@/app/Admin/AddProductForm";
import { getProducts } from "../api/useractions";

export default async function page() {
  const products = await getProducts();
  return (
    <div className="mt-8">
      {products.map((product) => (
        <div key={product}>
          <Card key={product.id} product={product} />
          {console.log(product.id)}
        </div>
      ))}

      <UploadForm />
    </div>
  );
}
