"use server";

import { SignJWT } from "jose";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import pool from "../../../../lib/db";
import { redirect } from "next/navigation";
import { z } from "zod";

const LoginStructure = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
});
// const state = {
//   errors: {
//     username: ["Username is required"],
//     password: ["Password must be 8+ characters"],
//   },
//   message: "Form submission failed",
// }; not used
/**
 * @param {Object} prevState - Previous form state
 * @param {FormData} formData - Submitted form data
 * @returns {Promise<Object>} - State with errors or login message
 */
export async function login(prevState, formData) {
  const validatedFields = LoginStructure.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Login Error",
    };
  }

  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const userRes = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (userRes.rowCount === 0) {
      return { message: "User not found" };
    }

    const user = userRes.rows[0];
    const isMatch = await bcrypt.compare(password.toString(), user.password);

    if (!isMatch) {
      return { message: "Incorrect password" };
    }

    const token = await new SignJWT({ username: user.username })
      .setProtectedHeader({ alg: "HS256" })
      .setSubject(user.id.toString())
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    const cookieStore = await cookies();
    cookieStore.set("jwt-token", token, {
      sameSite: "strict",
      httpOnly: true,
      secure: true,
      path: "/",
    });

    console.log("Login successful, redirecting now...");
    return {
      success: true,
      username: user.username,
    };
  } catch (err) {
    console.error("Login error:", err);
    return {
      message: "Something went wrong during login",
    };
  }
}
