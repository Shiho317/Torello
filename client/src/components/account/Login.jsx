import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormWrapper, LoginForm, LoginWrapper } from './Login.style'

const Login = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()

  const loginAccount = async(e) => {
    e.preventDefault()

    const currUser = {
      email: emailRef,
      password: passwordRef
    }

    try {
      const result = await axios.get("http://localhost:8888", currUser)
      const userData = {
        name: result.data.name,
        email: result.data.email,
        password: result.data.password,
        id: result.data._id
      }
      
    } catch (error) {
      
    }
  }

  return (
    <LoginWrapper>
      <FormWrapper>
        <h1>Login</h1>
      <LoginForm onSubmit={(e) => loginAccount(e)}>
        <input type='email' placeholder="Email" ref={emailRef} />
        <input type='password' placeholder="Password" ref={passwordRef} />
        <button type='submit'>Log in</button>
      </LoginForm>
        <Link to='/signup'>
          <p>You don't have account? Here.</p>
        </Link>
      </FormWrapper>
      
    </LoginWrapper>
  )
}

export default Login