import Image from "next/image";
import React from "react";
const Card = () => {
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
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art24.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art25.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art8.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art9.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art7.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
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
          <div className="border p-1">
            <Image
              src="/Images/Art11.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art4.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art5.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art13.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art23.jpeg"
              className="w-full object-cover h-full"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="border p-1">
            <Image
              src="/Images/Art22.jpeg"
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
