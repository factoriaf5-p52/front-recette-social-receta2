import { useEffect, useState } from 'react'
import { getRecipesRequest } from '../api/recep.api'
import Layout from '../components/Layout'
import RecetteCard from '../components/RecetteCard';


export type Recipe = {
  title: string;
  description: string;
  author: any;
  ingredientes: Array<any>;
  comment: string;
}


function SocialPage() {
  const [recipes, setRecipes] = useState <Recipe[]> ([])

  useEffect (()=>{
    async function loadRecipes(){
    const response = await getRecipesRequest()
    setRecipes(response.data)
    }
     
     
      loadRecipes()
  },[])
    

  return (
    <div >
      <div className='nav'>

      <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
      </div>
      <div className='div'>
          <h1>Social</h1>
         
          <p>Top 10, on the type of food you like</p>
          
          {
            recipes.map(recipe =>(
              <div >
                <h2>{recipe.title}</h2>
                <img src={require('../assets/comida.png')} alt="comida.png" />
                <RecetteCard />
               
              </div>
            ))
          }
          <Layout />
      </div>
    </div>
  )
}

export default SocialPage
