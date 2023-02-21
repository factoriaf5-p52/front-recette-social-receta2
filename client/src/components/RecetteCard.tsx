import React from 'react'
import { useNavigate } from 'react-router-dom'

export type Recipe = {
  _id:any
  title: string;
  description: string;
  author: any;
  ingredientes: Array<any>;
  comment: string;
}

 function RecetteCard({recipes}:any) {
   
    const navigate = useNavigate()
  return (
    <div>
        <h1></h1>
      <button onClick={()=>navigate(`/RecetteDetail/:id${recipes._id}`)}>Detail</button>
      <button onClick={()=>navigate('/SocialPage/RecetteDetail/:id')}>Detail</button>
    </div>
  )
}

export default RecetteCard
