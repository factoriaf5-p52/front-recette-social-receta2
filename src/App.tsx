import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SocialPage from './pages/SocialPage';
import StaticPage from './pages/StaticPage';
import RectListPage from './pages/RectListPage';
import RectDetail from './pages/RectDetail';
import RectForm from './pages/RectForm';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import Nofout from './pages/Nofout';

function App() {
  return (
      <Routes>
              <Route path='/' element={<Home />} />
              
        <Route>
            <Route path='/' element={<Layout />} />
                <Route path='/SocialPage' element={<SocialPage />} />
                <Route path='/StaticPage' element={<StaticPage />} />
                <Route path='/RectListPage' element={<RectListPage />} />
                <Route path='/RectDetail' element={<RectDetail />} />
                <Route path='/RectForm' element={<RectForm />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Profile' element={<Profile />} />
        </Route>
             
      </Routes>
 
  );
}

export default App;
