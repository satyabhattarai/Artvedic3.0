"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const Card = ({ product }) => {
  const router = useRouter();
  return (
    <div>
      <div className="group relative border-4">
        <Image
          src="/Images/products/Art1.jpeg"
          className="w-full object-cover h-full"
          alt="ArtImage"
          width={0}
          height={0}
          sizes="100vw"
          onClick={() => router.push(`/Overview/${product.id}`)}
        />
        {/* overlay */}
        <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 buttom-0 duration-600 flex justify-center items-center">
          <p className="text-white font-headings text-[34px] font-semibold">
            {product.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
