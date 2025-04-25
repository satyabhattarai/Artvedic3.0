"use server";

import pool from "../../../lib/db";
export async function getProducts(query) {
  try {
    const result = await pool.query("SELECT * FROM Products");
    return result.rows;
  } catch (error) {
    console.error("Error querying DB:", error);
    return error;
  }
}
