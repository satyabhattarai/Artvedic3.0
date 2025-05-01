"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { getoverview } from "@/app/api/overviewactions";
import { useParams } from "next/navigation";

export default function OverviewPage() {
  const params = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      if (!params?.id) return;
      const res = await getoverview(params.id);
      setProduct(res[0]);
    };
    fetchProducts();
  }, [params?.id]);
  if (product) {
    console.log(product);
  }
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="">
      <div className="h-screen">
        <div className="flex items-center justify-center">
          <div className="border p-1 h-[540px] w-[430px]">
            <Image
              src="/Images/Art19.jpeg" //{product.img bolaune ho khass}
              className="h-full w-full object-cover"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="flex justify-between font-text text-[16px] font-regular mt-32">
          <h1>{product && product.name}(14cm * 12cm)</h1>
          <div className="flex gap-4 font-text text-[16px] font-regular items-center">
            <h1>{product && product.price} /- </h1>
            <button className="bg-black px-4 py-1 text-tertiary ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <h1 className="flex justify-center font-headings text-[40px] font-medium text-primary mb-8">
        About the Artist
      </h1>
      <div className="flex flex-col gap-64">
        <div className="flex gap-8 items-center">
          <div className="border p-1 h-[350px] w-[400px]">
            <Image
              src="/Images/satya.jpg"
              className="h-full w-full object-cover"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="text-secondary self-end ">
            Hi, I’m Satya Bhattarai and welcome to my art gallery.
            <p className="mt-8">
              If you like what you see and would like to commission me, feel
              free to contact me on WhatsApp
            </p>
            or shoot me an email at bhattaraisatya.5@gmail.com
          </div>
        </div>

        <div className="flex gap-8 items-center ">
          <div className="text-secondary self-end">
            Hi, I’m Satya Bhattarai and welcome to my art gallery.
            <p className="mt-8">
              If you like what you see and would like to commission me, feel
              free to contact me on WhatsApp
            </p>
            or shoot me an email at bhattaraisatya.5@gmail.com
          </div>
          <div className="border p-1 h-[350px] w-[400px] ">
            <Image
              src="/Images/satya.jpg"
              className="h-full w-full object-cover"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
