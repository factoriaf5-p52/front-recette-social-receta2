

import { useEffect, useState } from 'react'
import { getUsersRequest } from '../api/recep.api'
import Layout from '../components/Layout'

function RectDetail() {
const [user, setUsers] = useState ()

useEffect(()=>{
console.log('users')


  }, [])

  return (
    <div>
      <h1>RectDetail</h1>
      <Layout />
    </div>
  )
}

export default RectDetail
