import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { getRecipesRequest } from '../api/recep.api';
import Layout from '../partials/Layout'

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
      <h1>RectList</h1>
    </div>
  )
}

export default RecetteListPage
