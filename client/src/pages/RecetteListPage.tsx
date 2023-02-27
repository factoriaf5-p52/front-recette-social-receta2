import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { getRecipesRequest } from '../api/recep.api';
import Layout from '../components/Layout'

export type Recipe = {
  title: string;
  description: string;
  author: any;
  ingredientes: Array<any>;
  comment: string;
}

function RecetteListPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    async function loardRecipes() {
      const response = await getRecipesRequest()
      setRecipes(response.data)
    }
    loardRecipes()
  },
    [])

  return (
    <div>
       <div className='nav'>
          <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
      </div>
      <h1>RectList</h1>{
        recipes.map(recipes => (
          <div >
            <h1>{recipes.title}</h1>
            <p>{recipes.description}</p>
            <p>{recipes.author}</p>
            <p>{recipes.ingredientes}</p>
            <p>{recipes.comment}</p>
          </div>
        ))
      }
      <Layout />
    </div>
  )
}

export default RecetteListPage
