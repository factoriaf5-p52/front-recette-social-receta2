import axios from 'axios'

// ----------SHOULD ALL------------//

const baseUserUrl = ('http://localhost:4000/api/v1/users')

const baseRecipeUrl = ('http://localhost:4000/api/v1/recipes')

export const getUsersRequest = async () => {
   return axios.get(baseUserUrl)
}

export const getRecipesRequest = async () => {
   return axios.get(baseRecipeUrl)
}

export const getRecipeRequest = async (id:any) =>{
   return await axios.get(baseRecipeUrl + `/${id}`)
}



