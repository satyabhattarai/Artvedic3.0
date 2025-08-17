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
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-headings font-semibold">Purchase rates</h1>
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b border-gray-300">Size</th>
              <th className="py-3 px-4 border-b  border-gray-300">
                Single portrait
              </th>
              <th className="py-3 px-4 border-b  border-gray-300">
                couple portrait
              </th>
              <th className="py-3 px-4 border-b  border-gray-300">
                Family portrait (3+)
              </th>
              <th className="py-3 px-4 border-b  border-gray-300">
                Pet Portrait
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                A4/A3
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                2500
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                4000
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                4500
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                2500
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                A2
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                3500
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                4500
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                5000
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                3500
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-headings font-semibold">Add on / Extra</h1>
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b  border-gray-300">Size</th>
              <th className="py-3 px-4 border-b  border-gray-300">Framing</th>
              <th className="py-3 px-4 border-b  border-gray-300">Courier</th>
              <th className="py-3 px-4 border-b  border-gray-300">
                custom background
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                Based on size
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                As per shop rates
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                Based on your location
              </td>
              <td className="py-3 px-4 border-b text-center  border-gray-300">
                Based on your request
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
