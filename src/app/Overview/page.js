import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <div className="">
      <div className="h-screen">
        <div className="flex items-center justify-center">
          <div className="border p-1 h-[540px] w-[430px]">
            <Image
              src="/Images/Art19.jpeg"
              className="h-full w-full object-cover"
              alt="ArtImage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="flex justify-between font-text text-[16px] font-regular mt-32">
          <h1>Taylor (14cm * 12cm)</h1>
          <div className="flex gap-4 font-text text-[16px] font-regular items-center">
            <h1>Rs. 4000 /- </h1>
            <button className="bg-black px-4 py-1 text-tertiary ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="font-headings text-[20px] font-medium text-primary mb-4">
          About the Artist
        </h1>
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
          <div className="text-secondary self-end">
            Hi, I’m Satya Bhattarai and welcome to my art gallery.
            <p className="mt-8">
              If you like what you see and would like to commission me, feel
              free to contact me on WhatsApp
            </p>
            or shoot me an email at bhattaraisatya.5@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
