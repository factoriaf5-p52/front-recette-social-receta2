import axios from 'axios'

// ----------SHOULD ALL------------//

const baseRecipeUrl = ('localhost:4000/api/v1/recipes')

export const getRecipeRequest = async () => {
   return axios.get(baseRecipeUrl)
}