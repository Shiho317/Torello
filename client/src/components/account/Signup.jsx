import React from "react";
import { Link } from "react-router-dom";
import { SignupForm, SignupWrapper, SUformWrap } from "./Signup.style";

const Signup = () => {
  return (
    <SignupWrapper>
      <SUformWrap>
        <h1>SignUp</h1>
        <SignupForm>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </SignupForm>
        <Link to="/">
          <p>Already have an account? Here.</p>
        </Link>
      </SUformWrap>
    </SignupWrapper>
  );
};

export default Signup;
