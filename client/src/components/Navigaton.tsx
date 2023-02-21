import React from 'react'
import { Link } from 'react-router-dom'

function Navigaton() {
  return (
    <>
    <ul className='ul'>
        <li> <Link to={'/SocialPage'}><img src={require('../assets/Rectangle 18.png')} alt="" /></Link></li>
        <li><Link to={'/Profile'}><img src={require('../assets/Rectangle 19.png')} alt="" /></Link></li>
        <li><Link to={'/RecetteListPage'}><img src={require('../assets/Rectangle 12.png')} alt="" /></Link></li>
        <li><Link to={'/StatisticcPage'}><img src={require('../assets/Rectangle 20.png')} alt="" /></Link></li>
        {/* <li><Link to={'/RecetteDetail'}>RecetteDetail</Link></li> */}
        <li><Link to={'/RectForm'}><img src={require('../assets/Rectangle 21.png')} alt="" /></Link></li>
        <li><Link to={'/Login'}>Login</Link></li>
        {/* <li> <Link to={'/'}>Inicio</Link></li> */}
        
    </ul>
     
    </>
  )
}

export default Navigaton
