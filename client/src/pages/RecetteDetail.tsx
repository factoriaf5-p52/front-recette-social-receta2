import { useEffect, useState } from 'react'
import { getRecipeRequest } from '../api/recep.api'
import Layout from '../components/Layout'

function RecetteDetail() {
  const [user, setUsers] = useState()

  useEffect(() => {
    console.log('recipe #')


  }, [])

  return (
    <div>
      <h1>RectDetail</h1>
      <Layout />
    </div>
  )
}

export default RecetteDetail
