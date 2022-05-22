import React from 'react'
import { LoginForm, LoginWrapper } from './Login.style'

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm>
        <input type='email' placeholder="Email" />
        <input type='password' placeholder="Password" />
        <button type='submit'>Log in</button>
      </LoginForm>
    </LoginWrapper>
  )
}

export default Login