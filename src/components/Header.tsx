import React, {useState} from 'react';
import './App.css';

export function Header() {
    const [darkmode, setDarkmode] = useState(false);
    const handleClick = () => {
        setDarkmode(!darkmode)
    }
  return (
    <>
        <button type="button" onClick={handleClick}>(!darkmode ? "dark" : "light")</button>
    </>
  );
}

export default Header;
