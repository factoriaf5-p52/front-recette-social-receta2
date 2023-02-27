import "./Header.css"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to={'/'}><img className="navbar-icon" src={require("../assets/home.svg").default}></img></Link>
        </>
    )
}

export default Header;
