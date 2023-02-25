import React, { useState, FormEvent } from 'react'
import { postUserRequest } from '../api/users.api';
import Layout from '../components/Layout'

// const example = {
//   "username": "hola",
//   "email": "email@email.email",
//   "password": "password"
// }

const RegisterForm = (props: any) => {
  
  const [post, setPost] = useState({
    "username": "",
    "email": "",
    "password": ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    postUserRequest(post)
      .catch()
      .then(response => console.log(response))
      .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({...post, [e.target.name]: e.target.value})
  };

  return (
      <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            name="username" 
            placeholder="username"
            autoComplete="off" 
            onChange={handleInput} 
            required
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="enter an email"
            autoComplete="off" 
            onChange={handleInput} 
            required
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="enter a password"
            onChange={handleInput} 
            required
          />
          <button>Register</button>
        </form>
        <button onClick={() => props.onFormSwitch("login")}>Already have an account? Log in here.</button>
        <Layout />
      </>
  )
}

export default RegisterForm;
