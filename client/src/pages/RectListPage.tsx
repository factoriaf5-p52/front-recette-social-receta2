import { type } from 'os'
import React, { useEffect } from 'react'
import Layout from '../components/Layout'

type Props = {
  
}

function RectListPage() {

  useEffect(()=>{

    console.log('RectListPage')
  }, [])
  return (
    <div>
      <h1>RectList</h1>
      <Layout />
    </div>
  )
}

export default RectListPage
