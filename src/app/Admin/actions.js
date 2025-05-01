"use server";

import pool from "../../../lib/db";
import { z } from "zod";

const ProductStructure = z.object({
  name: z.string().min(1),
  price: z.string().min(1),
  discounted_price: z.string().min(0).optional(),
  category: z.string().min(1),
  stock_quantity: z.string().min(1).optional(),
  dimensions: z.string().min(1).optional(),
  image_url: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});

export async function addProduct(formData) {
  const validatedFields = ProductStructure.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    discounted_price: formData.get("discounted_price"),
    category: formData.get("category"),
    stock_quantity: formData.get("stock_quantity"),
    dimensions: formData.get("dimensions"),
    image_url: formData.get("image_url"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Could not create product",
    };
  }

  const name = formData.get("name");
  const price = formData.get("price");
  const discounted_price = formData.get("discounted_price");
  const category = formData.get("category");
  const stock_quantity = formData.get("stock_quantity");
  const dimensions = formData.get("dimensions");
  const image_url = formData.get("image_url");
  const description = formData.get("description");

  try {
    const res = await pool.query(
      "INSERT INTO products(name,price,discounted_price,stock_quantity,dimensions,description,image_url,category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        name,
        price,
        discounted_price,
        stock_quantity,
        dimensions,
        description,
        image_url,
        category,
      ]
    );
    return res.rows;
  } catch (error) {
    console.error("AddProduct Error:", error);
    return {
      message: "Something went wrong during adding product",
    };
  }
}
