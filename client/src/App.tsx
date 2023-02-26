import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SocialPage from './pages/SocialPage';
import RectForm from './pages/RectForm';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import RecetteListPage from './pages/RecetteListPage';
import RecetteDetail from './pages/RecetteDetail';
import StatisticPage from './pages/StatisticPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Layout />} />
      <Route path='/SocialPage' element={<SocialPage />} />
      <Route path='/StatisticPage' element={<StatisticPage />} />
      <Route path='/RecetteListPage' element={<RecetteListPage />} />
      <Route path='/RecetteDetail' element={<RecetteDetail />} />
      <Route path='/RecetteForm' element={<RectForm />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
