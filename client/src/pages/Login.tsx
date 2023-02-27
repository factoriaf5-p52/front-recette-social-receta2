import React, {useRef, useState} from 'react'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: any) => {
    setCurrentForm(formName);
  }

  return (
      <>
        {currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <RegisterForm  onFormSwitch={toggleForm}/>}
      </>
  )
}

export default Login;
