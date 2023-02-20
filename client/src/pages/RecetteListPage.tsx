import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { getRecipeRequest } from '../api/recep.api';
import Layout from '../components/Layout'

type Recipe = {
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
      const response = await getRecipeRequest()
      setRecipes(response.data)
    }
    loardRecipes()
  },
    [])

  return (
    <div>
      <h1>RectList</h1>{
        recipes.map(recipes => (
          <div>
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
