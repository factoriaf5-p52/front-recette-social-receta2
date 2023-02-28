import { useEffect, useState } from 'react'
import { getRecipesRequest } from '../api/recep.api';
import RecipeCard from '../partials/RecipeCardList';
import { Recipe } from '../partials/RecipeCardList';
import './styles/RecetteList.css'


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
    <div className="card-container">
      {
        recipes.map(recipe => (
          <RecipeCard recipes={recipe} />
        ))
      }
    </div>
  )
}

export default RecetteListPage
