import React, {useRef, useState, useEffect, FormEvent, FormEventHandler} from 'react'
import Layout from '../components/Layout'

const LoginForm = (props: any ) => {
  const userRef = useRef(null);
  const errRef = useRef(null);

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
    setEmail("");
    setPwd("");
  }

  return (
      <>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
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
          <button>Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
        <Layout />
      </>
  )
}

export default LoginForm;
