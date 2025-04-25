"use client";

import React from "react";
import { login } from "./actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
const Loginform = () => {
  const router = useRouter();
  const initialstate = { message: null, errors: {} }; //For the form: should matchup with the type in actions file
  const [state, dispatch] = React.useActionState(login, initialstate);
  useEffect(() => {
    if (state?.success) {
      router.push("/Home"); // ⬅️ redirect manually after success
    }
  }, [state, router]);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-8">
        <label className="text-black">Username</label>
        <input id="username" name="username" type="text" />
        {/* {state?.errors?.username?.map((error: string) => (
          <p className="text-red-500">{error}</p>
        ))} */}
        {state?.errors?.username?.map((error, index) => (
          <p key={index} className="text-red-500">
            {error}
          </p>
        ))}

        <label>Password</label>
        <input id="password" name="password" type="password" />
        {state?.errors?.password?.map((error, index) => (
          <p key={index} className="text-red-500">
            {error}
          </p>
        ))}
        <button type="submit">Submit</button>
        {state?.message && <p className="text-red-500">{state.message}</p>}
      </form>
    </div>
  );
};

export default Loginform;
