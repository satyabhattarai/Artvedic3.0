"use client";

import React from "react";
import { signup } from "./actions";
import { useFormState } from "react-dom";

const Signupform = () => {
  const initialstate = { message: null, errors: {} }; //For the form: should matchup with the type in actions file
  const [state, dispatch] = React.useActionState(signup, initialstate);

  return (
    <div>
      <div>
        <form action={dispatch} className="flex flex-col gap-8">
          <label className="text-black">Username</label>
          <input id="username" name="username" type="text" />
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

          <label> Confirm Password</label>
          <input id="confirmpassword" name="confirmpassword" type="password" />
          {state?.errors?.confirmpassword?.map((error, index) => (
            <p key={index} className="text-red-500">
              {error}
            </p>
          ))}
          <button type="submit">Submit</button>
          {state?.message && <p className="text-red-500">{state.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signupform;
