"use client";

import React, { useState } from "react";

import { addProduct } from "../actions";

const Page = () => {
  const [activeSection, setActiveSection] = useState("details-section");
  return (
    <div className="flex flex-col gap-32 ">
      <div className="text-center">
        <h1 className="font-headings font-semibold text-[24px]">
          Upload your artwork here
        </h1>
        <p>Complete the 8 steps to upload your artwork</p>
      </div>
      <div className="flex gap-16 justify-between items-center">
        <div className="bg-sky-200 rounded-2xl p-4">
          <div className="text-center flex flex-col gap-4">
            <div>
              <h1 className="font-headings font-semibold text-[24px]">
                Hey Artist, Welcome to artvedic.
              </h1>
              <div className="flex gap-2">
                <p className="font-headings font-semibold">
                  Give us your valuable drawing here
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 12h16m0 0l-6-6m6 6l-6 6"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 min-w-1/2 bg-gray-50 rounded-2xl">
          <div className="flex gap-8 border-b-1 border-gray-400 px-8 py-4">
            <button
              className="cursor-pointer"
              onClick={() => {
                setActiveSection("details-section");
              }}
            >
              Details
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                setActiveSection("image-section");
              }}
            >
              Image
            </button>
          </div>

          <form className="p-8 space-y-4" action={addProduct}>
            {activeSection === "details-section" && (
              <section className="flex flex-col gap-2 ">
                <div>
                  <label className="block mb-1 text-black font-regular ">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-black font-regular ">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    className="w-full px-4 py-2 border rounded-lg  border-gray-300"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-black font-regular ">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    className="w-full px-4 py-2 border rounded-lg  border-gray-300"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-black font-regular ">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="w-full px-4 py-2 border rounded-lg  border-gray-300"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-black font-regular ">
                    Discounted Price
                  </label>
                  <input
                    type="number"
                    name="discounted_price"
                    className="w-full px-4 py-2 border rounded-lg  border-gray-300"
                  />
                </div>
              </section>
            )}
            {activeSection === "image-section" && (
              <section className="flex flex-col gap-2 ">
                <div>
                  <label className="block mb-1 text-black font-regular ">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image_url"
                    placeholder="https://example.com/my-image.jpg"
                    className="w-full px-4 py-2 border rounded-lg  border-gray-300"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-black  font-regular ">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    name="stock_quantity"
                    className="w-full px-4 py-2 border rounded-lg  border-gray-300"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-black font-regular ">
                    Dimensions
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    className="w-full px-4 py-2 border rounded-lg  border-gray-300"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="commissioned"
                    className="w-5 h-5 border rounded-lg  border-gray-300"
                  />
                  <label className="block mb-1 text-black font-regular ">
                    Commissioned
                  </label>
                </div>
                <button
                  type="submit"
                  className=" bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </section>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
