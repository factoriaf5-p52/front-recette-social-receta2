import axios from 'axios'

// ----------SHOULD ALL------------//

export const getUsersRequest = async () => {
   return axios.get('http://localhost:4000/api/v1/users')

}

export const getRecipeRequest = async () => {
   return axios.get('localhost:4000/api/v1/recipes')

}

