import React from 'react'
import { Link } from 'react-router-dom'

function Navigaton() {
  return (
    <>
    <ul>
        <li> <Link to={'/SocialPage'}>SocialPage</Link></li>
        <li><Link to={'/StaticPage'}>StaticPage</Link></li>
        <li><Link to={'/RectListPage'}>RectListPage</Link></li>
        <li><Link to={'/RectDetail'}>RectDetail</Link></li>
        <li><Link to={'/RectForm'}>RectForm</Link></li>
        <li><Link to={'/Login'}>Login</Link></li>
        <li><Link to={'/Profile'}>Profile</Link></li>
        <li> <Link to={'/'}>Inicio</Link></li>
        
    </ul>
     
    </>
  )
}

export default Navigaton
