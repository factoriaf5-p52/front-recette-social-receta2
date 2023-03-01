import React, { useEffect, useState } from 'react'
import { getUsersRequest } from '../api/users.api'

type Props = {

}

function Profile() {

  return (
    <>

    </>
  )
}

export default Profile


// const [recipes, setRecipe] = useState<Recipe[]>([])

// useEffect(() => {
//   async function loadRecipes() {
//     const response = await getRecipesRequest()
//     setRecipe(response.data)
//   }
//   loadRecipes()
// }, [])

// return (
//   <div className="card-container">
//     {recipes.map(recipe => (
//       <RecipeCard recipe={recipe} key={recipe._id} />
//     ))}
//   </div>
// )