"use server";

import pool from "../../../lib/db";
export async function getoverview(id) {
  console.log(id);
  try {
    const result = await pool.query(`SELECT * FROM Products WHERE id = ${id}`);
    return result.rows;
  } catch (error) {
    console.error("Error querying DB:", error);
    return error;
  }
}
