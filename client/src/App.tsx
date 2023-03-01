import './App.css';
import {
  Route,
  Routes
}
  from 'react-router-dom';

import Home from './pages/Home';
import SocialPage from './pages/SocialPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RecetteList from './pages/RecetteList';
import RecetteDetail from './pages/RecetteDetail';
import StatisticPage from './pages/StatisticPage';
import Layout from './partials/Layout';
import RecetteForm from './pages/RecetteForm';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/social' element={<SocialPage />} />
        <Route path='/statistic' element={<StatisticPage />} />
        <Route path='/recetteList' element={<RecetteList />} />
        <Route path='/recetteDetail/:id' element={<RecetteDetail />} />
        <Route path='/recetteForm' element={<RecetteForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
