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
<<<<<<< HEAD
    <div>
       <div className='nav'>
          <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
      </div>
      <h1>Loging</h1>
      <Layout />
    </div>
=======
      <>
        {currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <RegisterForm  onFormSwitch={toggleForm}/>}
      </>
>>>>>>> navbar
  )
}

export default Login;
