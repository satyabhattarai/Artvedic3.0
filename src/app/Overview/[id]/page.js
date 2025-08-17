"use client";

import React, { useEffect, useState } from "react";

import BuyProduct from "@/Components/BuyProduct";
import { Drawer } from "vaul";
import Image from "next/image";
import { getoverview } from "@/app/api/overviewactions";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function OverviewPage() {
  const router = useRouter();
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
    <div className="mt-16">
      <Drawer.Root>
        <div className="h-screen">
          <div className="flex flex-col justify-between h-3/4">
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
            <div className="flex justify-between font-text text-[16px] font-regular ">
              <div className="flex flex-col ">
                <h1>
                  {product && product.name} ({product && product.dimensions})
                </h1>
                <h1>Stock Quantity: {product && product.stock_quantity}</h1>
                <h1>{product && product.description}</h1>
              </div>
              <div className="flex gap-4 font-text text-[16px] font-regular items-center">
                <h1 className="line-through text-red-500">
                  {product && product.price} /-
                </h1>
                <h1>{product && product.discounted_price} /- </h1>
                <Drawer.Trigger className="bg-black px-4 py-1 text-tertiary">
                  Buy Now
                </Drawer.Trigger>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="#about"
                className="flex justify-center items-center w-12 h-12 p-1 bg-gray-200 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 h-fit fixed top-0 right-0 outline-none">
              <Drawer.Title className="sr-only">
                Product Information
              </Drawer.Title>
              <BuyProduct />
            </Drawer.Content>
          </Drawer.Portal>
        </div>
      </Drawer.Root>
    </div>
  );
}
