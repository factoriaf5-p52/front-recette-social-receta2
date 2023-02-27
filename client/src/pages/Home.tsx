import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../partials/Layout'

function Home() {
  return (
    <>
      <h1>HOME</h1>
      <button>
        <Link to={'/SocialPage'}>BON APPETIT</Link>
      </button>
    </>
  )
}

export default Home
