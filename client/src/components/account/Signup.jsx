import React from "react";
import { SignupForm, SignupWrapper } from "./Signup.style";

const Signup = () => {
  return (
    <SignupWrapper>
      <SignupForm>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log in</button>
      </SignupForm>
    </SignupWrapper>
  );
};

export default Signup;
