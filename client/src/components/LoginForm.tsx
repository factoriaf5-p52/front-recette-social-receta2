import React, {useRef, useState, useEffect, FormEvent} from 'react'
import { authUserRequest } from '../api/users.api';
import Layout from '../components/Layout'

const LoginForm = (props: any ) => {
  
  const [post, setPost] = useState({
    "email": "",
    "password": ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    authUserRequest(post)
      .catch()
      .then(response => console.log(response))
      .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({...post, [e.target.name]: e.target.value})
  };

  // TO-DO: STORE ACCESS TOKEN

  return (
      <>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            name="email" 
            placeholder="email@email.em"
            autoComplete="off" 
            onChange={handleInput} 
            required
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="********"
            onChange={handleInput} 
            required
          />
          <button>Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
        <Layout />
      </>
  )
}

export default LoginForm;
