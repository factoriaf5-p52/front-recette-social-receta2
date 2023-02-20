import axios from 'axios'

// ----------SHOULD ALL------------//

const baseUserUrl = ('http://localhost:4000/api/v1/users')

const baseRecipeUrl = ('localhost:4000/api/v1/recipes')

export const getUsersRequest = async () => {
   return axios.get(baseUserUrl)
}

export const getRecipeRequest = async () => {
   return axios.get(baseRecipeUrl)
}

