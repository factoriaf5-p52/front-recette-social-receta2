import React, {useRef, useState, useEffect, FormEvent, FormEventHandler} from 'react'
import Layout from '../components/Layout'

const RegisterForm = (props: any) => {
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email, pwd);
    setUsername("");
    setEmail("");
    setPwd("");
  }

  return (
      <>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            placeholder="username"
            ref={userRef} 
            autoComplete="off" 
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
            required
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            id="email" 
            placeholder="email@email.em"
            ref={userRef} 
            autoComplete="off" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            required
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            placeholder="********"
            onChange={(e) => setPwd(e.target.value)} 
            value={pwd} 
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
