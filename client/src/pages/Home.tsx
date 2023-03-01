import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../partials/Layout'
import ProfileCard from '../partials/ProfileCard'

function Home() {
  return (
    <>
      <h1>HOME</h1>
      <button>
        <Link to={'/social'}>BON APPETIT</Link>

       
      </button>
    </>
  )
}

export default Home
