"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const Card = ({ product }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col  items-center gap-4">
        <div className="grid grid-cols-3 max-w-[1140px] gap-4">
          <div className="border p-1">
            <Image
              src="/Images/Art19.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
              onClick={() => router.push(`/Overview/${product.id}`)}
            />
            <h1>{product.name}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-headings font-medium text-[30px] ">COMMISSIONED</h1>
        <div className="grid grid-cols-3 max-w-[1140px] gap-4">
          <div className="border p-1">
            <Image
              src="/Images/Art1.jpeg"
              className="w-full object-cover h-full"
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
};

export default Card;
