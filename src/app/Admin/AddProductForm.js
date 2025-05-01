import React from "react";
import { addProduct } from "./actions";

const AddProductForm = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Product</h2>
      <form className="space-y-4" action={addProduct}>
        <div>
          <label className="block mb-1 text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Stock Quantity</label>
          <input
            type="number"
            name="stock_quantity"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Dimensions</label>
          <input
            type="text"
            name="dimensions"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Discounted Price</label>
          <input
            type="number"
            name="discounted_price"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Image URL</label>
          <input
            type="text"
            name="image_url"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
