import axios from 'axios'

// ----------SHOULD ALL------------//
const baseRecipeUrl = ('http://localhost:4000/api/v1/recipes')



export const getRecipesRequest = async () => {
   return axios.get(baseRecipeUrl)
}

export const getRecipeRequest = async (id: any) => {
   return await axios.get(baseRecipeUrl + `/recipe/${id}`)
}



