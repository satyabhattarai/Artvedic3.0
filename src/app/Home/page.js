import Artvedic from "@/Components/Artvedic";
import BuyProduct from "@/Components/BuyProduct";
import Card from "@/Components/Card";
import Image from "next/image";
import React from "react";
import UploadForm from "@/app/Admin/AddProductForm/page";
import { getProducts } from "../api/useractions";
import { getSession } from "../../../lib/session";
export default async function page() {
  const session = await getSession();
  console.log("session in page:", session);
  const products = await getProducts();
  const commissioned = products.filter((product) => product.commissioned);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-headings font-medium text-[30px] ">COMMISSIONED</h1>
      <div className="grid grid-cols-3 max-w-[1140px] gap-4">
        {commissioned.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// const personals = products.filter((product) => !product.commissioned);
// personals.map((product) =>(content))
{
  /* <div className="grid grid-cols-3 max-w-[1140px] gap-4">
        {personals.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div> */
}
