import React, { useState, FormEvent} from 'react'
import { authUserRequest } from '../api/users.api';
import Layout from '../components/Layout'

const LoginForm = (props: any ) => {
  let token;
  
  const [post, setPost] = useState({
    "email": "",
    "password": ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    authUserRequest(post)
      .catch()
      .then((response) => {
        console.log(response);
        token = response.data.access_token;
        console.log("access_token: ", token);
        sessionStorage.setItem("access_token", token);
      })
      .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({...post, [e.target.name]: e.target.value})
  };

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
