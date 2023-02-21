import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeRequest, getUsersRequest } from '../api/recep.api'
import Layout from '../components/Layout'
import RecetteCard from '../components/RecetteCard'
import { Recipe } from './SocialPage'



function RecetteDetail() {
  const [recipes, setRecipe] = useState <Recipe []> ([])

  const params = useParams ()
    console.log(params)

  useEffect(() => {
    const loadRecipe = async ()=>{
      if(params.id){
        const recipes = await getRecipeRequest(params.id)
        console.log(recipes.data)
      }
    }
    loadRecipe()
  


  }, [])

  return (
    <div>
       <div className='nav'>
          <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
      </div>
      <h1>RectDetail</h1>
      
      <Layout />
    </div>
  )
}

export default RecetteDetail
