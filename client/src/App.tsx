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
import StatisticcPage from './pages/StatisticPage';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Layout />} />
      <Route>
          <Route path='/SocialPage' element={<SocialPage />} />
          <Route path='/StatisticcPage' element={<StatisticcPage />} />
          <Route path='/RecetteListPage' element={<RecetteListPage />} />
          <Route path='/RecetteDetail/:id' element={<RecetteDetail />} />
          <Route path='/SocialPage/RecetteDetail/:id' element={<RecetteDetail />} />
          <Route path='/RectForm' element={<RectForm />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Profile' element={<Profile />} />
      </Route>
          <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
