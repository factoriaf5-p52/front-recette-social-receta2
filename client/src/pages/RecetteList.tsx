import { useEffect, useState } from 'react'
import { getRecipesRequest } from '../api/recep.api';
import RecipeCardSearch from '../partials/RecipeCardList';


export type Recipe = {
  _id: string;
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
    <>
      {
        recipes.map(recipe => (
          <div >
            <RecipeCardSearch recipes={recipe} />
          </div>
        ))
      }
    </>
  )
}

export default RecetteListPage
