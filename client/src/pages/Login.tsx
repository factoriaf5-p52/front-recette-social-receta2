import React, {useRef, useState, useEffect, FormEvent, FormEventHandler} from 'react'
import Layout from '../components/Layout'

const Login = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
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
            ref={userRef} 
            autoComplete="off" 
            onChange={(e) => setUser(e.target.value)} 
            value={user} 
            required
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            onChange={(e) => setPwd(e.target.value)} 
            value={pwd} 
            required
          />
          <button>Log In</button>
        </form>
        <p>
          Need an Account?<br />
          <span className='need-account'>
            {/* router link here */}
            <a href="#">Sign Up</a>
          </span>
        </p>
        <Layout />
      </>
  )
}

export default Login;
