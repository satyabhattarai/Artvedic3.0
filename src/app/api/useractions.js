"use server";

import pool from "../../../lib/db";
export async function getusers(query) {
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error querying DB:", error);
    return error;
  }
}
