import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupForm, SignupWrapper, SUformWrap } from "./Signup.style";
import axios from 'axios'

const Signup = () => {

  const usernameRef = useRef(null)
  const useremailRef = useRef(null)
  const userpasswordRef = useRef(null)

  const navigate = useNavigate()

  const addAccount = async(e) => {
    e.prevendDefault();

    const newUser = {
      name: usernameRef,
      email: useremailRef,
      password: userpasswordRef
    }
    try {
      await axios.post("http://localhost:8888", newUser)
      alert("You have successfully created account.");
      setTimeout(() => {
        navigate('/')
      }, 500)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <SignupWrapper>
      <SUformWrap>
        <h1>SignUp</h1>
        <SignupForm onSubmit={(e) => addAccount(e)}>
          <input type="text" placeholder="Name" ref={usernameRef} />
          <input type="email" placeholder="Email" ref={useremailRef} />
          <input type="password" placeholder="Password" ref={userpasswordRef} />
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
