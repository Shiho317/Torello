import React from 'react'
import { Link } from 'react-router-dom'
import { FormWrapper, LoginForm, LoginWrapper } from './Login.style'

const Login = () => {
  return (
    <LoginWrapper>
      <FormWrapper>
        <h1>Login</h1>
      <LoginForm>
        <input type='email' placeholder="Email" />
        <input type='password' placeholder="Password" />
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