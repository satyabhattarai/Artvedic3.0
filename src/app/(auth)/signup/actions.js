"use server";

import { SignJWT } from "jose";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import pool from "../../../../lib/db"; // Adjust this path if needed
import { redirect } from "next/navigation";
import { z } from "zod";

const SignUpStructure = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
  confirmpassword: z.string().min(6),
});

export async function signup(prevState, formData) {
  const username = formData.get("username");
  console.log("username aayo kinai:", username);
  const password = formData.get("password");
  const confirmpassword = formData.get("confirmpassword");

  const validatedFields = SignUpStructure.safeParse({
    username: username,
    password: password,
    confirmpassword: confirmpassword,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Signup error",
    };
  }

  if (password !== confirmpassword) {
    return {
      message: "Both passwords must match",
    };
  }

  try {
    const userRes = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (userRes.rowCount > 0) {
      return {
        message: "User already exists",
      };
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(password.toString(), saltRounds);

    const insertRes = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hash]
    );

    if (insertRes.rowCount === 1) {
      const user = insertRes.rows[0];

      const token = await new SignJWT({})
        .setProtectedHeader({ alg: "HS256" })
        .setSubject(user.id.toString())
        .setIssuedAt()
        .setExpirationTime("2w")
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));

      const cookieStore = await cookies();
      cookieStore.set("jwt-token", token, {
        sameSite: "strict",
        httpOnly: true,
        secure: true,
        path: "/",
      });

      redirect("/login");
    }
  } catch (error) {
    console.error("Signup error:", error);
    return {
      message: "Something went wrong during signup",
    };
  }
}
