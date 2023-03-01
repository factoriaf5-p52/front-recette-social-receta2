import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={'/social'}>
            <img src={require('../assets/home.svg').default} alt="home-logo" />
          </Link>
        </li>

        <li>
          <Link to={'/profile'}>
            <img src={require('../assets/user.svg').default} alt="user-logo" />
          </Link>
        </li>

        {/* <li>
        <Link to={''}>
          <img src={require('../assets/fav.svg').default} alt="fav-logo" />
        </Link>  
        </li> */}

        <li>
          <Link to={'/recetteList'}>
            <img src={require('../assets/search.svg').default} alt="loupe-logo" />
          </Link>
        </li>

        <li>
          <Link to={'/'}>
            <img src={require('../assets/add.svg').default} alt="add-logo" />
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Navbar;