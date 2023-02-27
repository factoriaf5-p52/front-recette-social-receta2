import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
}
  from 'react-router-dom';

import Home from './pages/Home';
import SocialPage from './pages/SocialPage';
import RectForm from './pages/RectForm';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RecetteListPage from './pages/RecetteListPage';
import RecetteDetail from './pages/RecetteDetail';
import StatisticPage from './pages/StatisticPage';
import Layout from './partials/Layout';
import React from 'react';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path='/SocialPage' element={<SocialPage />} />
//         <Route path='/StatisticcPage' element={<StatisticPage />} />
//         <Route path='/RecetteListPage' element={<RecetteListPage />} />
//         <Route path='/RecetteDetail/:id' element={<RecetteDetail />} />
//         <Route path='/RectForm' element={<RectForm />} />
//         <Route path='/Login' element={<Login />} />
//         <Route path='/Profile' element={<Profile />} />
//       </Route>
//     </Routes>
//   )
// )

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path='/SocialPage' element={<SocialPage />} />
//         <Route path='/StatisticPage' element={<StatisticPage />} />
//         <Route path='/RecetteListPage' element={<RecetteListPage />} />
//         <Route path='/RecetteDetail/:id' element={<RecetteDetail />} />
//         <Route path='/RectForm' element={<RectForm />} />
//         <Route path='/Login' element={<Login />} />
//         <Route path='/Profile' element={<Profile />} />
//       </Route>
    </Routes>
  );
}

export default App;
