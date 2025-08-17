"use client";

import React from "react";
import { login } from "./actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
const Loginform = () => {
  const router = useRouter();
  const initialstate = {
    message: null,
    errors: {},
    success: false,
    username: "",
  }; //For the form: should matchup with the type in actions file
  const [state, dispatch] = React.useActionState(login, initialstate);
  useEffect(() => {
    if (state?.success) {
      localStorage.setItem("admin", state.username);
      router.push("/");
      window.location.href = "/";
    }
  }, [state, router]);

  return (
    <div className="flex flex-col h-[600px] justify-between items-center">
      <div>
        <h1 className="font-headings font-bold text-[24px] text-center">
          Are you an artist?
        </h1>
        <p className="font-regular text-xl">Login only if you are an artist.</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg w-1/4 ">
        <form action={dispatch} className="flex flex-col gap-8 ">
          <label className="font-regular text-xl mb-1">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            className="w-full px-4 py-2 border rounded-lg  border-gray-300"
          />
          {/* {state?.errors?.username?.map((error: string) => (
          <p className="text-red-500">{error}</p>
        ))} */}
          {state?.errors?.username?.map((error, index) => (
            <p key={index} className="text-red-500">
              {error}
            </p>
          ))}

          <label className="font-regular text-xl">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg  border-gray-300"
          />
          {state?.errors?.password?.map((error, index) => (
            <p key={index} className="text-red-500">
              {error}
            </p>
          ))}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
          {state?.message && <p className="text-red-500">{state.message}</p>}
        </form>
        <p className="text-gray-400 pt-2">
          Dont have an account?
          <a href="/signup" className="underline text-blue-500">
            {" "}
            Signup{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loginform;
