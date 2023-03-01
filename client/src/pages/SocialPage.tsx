import { useEffect, useState } from 'react'
import { getRecipesRequest } from '../api/recep.api'
import RecetteCard from '../partials/RecetteCard';


export type Recipe = {
  _id: string;
  title: string;
  description: string;
  author: any;
  ingredientes: string;
  comment: string;
}


function SocialPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    async function loadRecipes() {
      const response = await getRecipesRequest()
      setRecipes(response.data)
    }
    loadRecipes()
  }, [])


  return (
    <>
      <div className='div'>
        <h1>Social</h1>

        <p>Top 10, on the type of food you like</p>
        {
          recipes.map(recipe => (
            <div >
              <h2>{recipe.title}</h2>
              <img src={require('../assets/mock.png')} alt="mock image" />

              <RecetteCard recipes={recipe} />

            </div>
          ))
        }
      </div>
    </>
  )
}

export default SocialPage
