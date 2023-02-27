import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeRequest } from '../api/recep.api'

type Author = {
  username: string;
}

type Ingredients = {
  name: string;
  measure_unit: string;
}
type Measure_unit = {

}

export type Recipe = {
  _id: string;
  title: string;
  description: string;
  author: Author;
  tags: Array<any>;
  // comment: string;
  ingredients: Ingredients;
}


function RecetteDetail() {
  const [recipe, setRecipe] = useState<Recipe>()

  const params = useParams()

  useEffect(() => {
    const loadRecipe = async () => {
      if (params.id) {
        const recipe = await getRecipeRequest(params.id)
        console.log(recipe.data)
        setRecipe(recipe.data)
      }
    }
    loadRecipe()
  }, [])

  return (
    <>
    </>
  )
}

export default RecetteDetail
