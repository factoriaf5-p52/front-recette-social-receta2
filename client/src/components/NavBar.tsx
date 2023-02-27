import "./NavBar.css"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <nav className="navbar">
            <Link to={'/SocialPage'}><img className="navbar-icon" src={require("../assets/home.svg").default}></img></Link>
            <Link to={'/Login'}><img className="navbar-icon" src={require("../assets/profile.svg").default}></img></Link>
            <Link to={'/RecetteListPage'}><img className="navbar-icon" src={require("../assets/search.svg").default}></img></Link>
            <Link to={'/'}><img className="navbar-icon" src={require("../assets/favorites.svg").default}></img></Link>
            <Link to={'/RecetteForm'}><img className="navbar-icon" src={require("../assets/create.svg").default}></img></Link>
        </nav>
    </>
  )
}

export default NavBar;
