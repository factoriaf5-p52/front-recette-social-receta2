import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function Home() {
  return (
    <div>
      <div className='nav'>
          <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
      </div>
      <h1>HOME</h1>
      <button className='button'><Link to={'/SocialPage'}>BON APPETIT</Link></button>
      <Layout />
    </div>
  )
}

export default Home
