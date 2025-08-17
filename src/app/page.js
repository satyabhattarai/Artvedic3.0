"use client";

import "aos/dist/aos.css";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";

import AOS from "aos";
import Artvedic from "@/Components/Artvedic";
import Card from "@/Components/Card";
import Image from "next/image";
import MasonryLayout from "@/Components/MasonryLayout";
import { getProducts } from "./api/useractions";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isBouncing, setisBouncing] = useState(true);

  const personals = products.filter((product) => !product.commissioned);
  const getProduct = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setisBouncing(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-32">
      <div className="flex justify-between">
        <div className=" flex flex-col justify-center mt-16">
          <h1
            className=" font-bold font-brand text-[48px] tracking-wide"
            data-aos="fade-down"
          >
            Hey, I am
            <span
              className={`${
                isBouncing ? "animate-bounce" : ""
              }  inline-block mx-4 `}
            >
              Satya
            </span>
            Bh.
          </h1>
          <p
            className="text-grey-400 ml-32 font-headings text-[24px]"
            data-aos="fade-right"
          >
            An artist and a designer who blends art with code.
          </p>
        </div>
        <div className="w-128 h-140">
          <Image
            data-aos="fade-left"
            src="/Images/Satya-Brand.png"
            className="w-full object-cover h-full"
            alt="ArtImage"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
      {/* personal artworks */}
      <div className="flex flex-col gap-16">
        <h1 className="text-center font-semibold font-headings text-[32px] ">
          Personal Artworks
        </h1>
        {/* <MasonryLayout> */}
        <div className="grid grid-cols-4 gap-8">
          {personals.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        {/* </MasonryLayout> */}
      </div>
      <section
        id="about"
        className="min-h-screen flex flex-col gap-8 justify-center"
      >
        <h1 className="flex justify-center font-headings text-[40px] font-medium text-primary ">
          About the Artist
        </h1>
        <div className="flex flex-col gap-24">
          <div className="flex gap-16 justify-between items-center">
            <div
              className="border p-1 h-[250px] w-[400px]"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <Image
                src="/Images/satya.jpg"
                className="h-full w-full object-cover"
                alt="ArtImage"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="text-secondary ">
              Hi, I’m Satya Bhattarai and welcome to my art gallery.
              <p className="mt-8">
                If you like what you see and would like to commission me, feel
                free to contact me on WhatsApp
              </p>
              or shoot me an email at bhattaraisatya.5@gmail.com
            </div>
          </div>

          <div className="flex gap-16  justify-between items-center ">
            <div className="text-secondary ">
              Hi, I’m Satya Bhattarai and welcome to my art gallery.
              <p className="mt-8">
                If you like what you see and would like to commission me, feel
                free to contact me on WhatsApp
              </p>
              or shoot me an email at bhattaraisatya.5@gmail.com
            </div>
            <div
              className="border p-1 h-[250px] w-[400px]"
              data-aos="fade-left"
              data-aos-delay="700"
            >
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
      </section>
    </div>
  );
}
