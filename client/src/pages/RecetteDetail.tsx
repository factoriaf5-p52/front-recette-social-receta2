import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeRequest} from '../api/recep.api'
import Layout from '../components/Layout'
import RecetteCard from '../components/RecetteCard'

type Author = {
  username:string;
}

type Ingredients = {
  name:string;
  measure_unit:string;
}
type Measure_unit = {

}

export type Recipe = {
  _id:string;
  title: string;
  description: string;
  author:Author;
  tags: Array<any>;
  // comment: string;
  ingredients:Ingredients;
}


function RecetteDetail() {
  const [recipe, setRecipe] = useState <Recipe> ()

  const params = useParams ()
    // console.log(params)

  useEffect(() => {
    const loadRecipe = async ()=>{
      if(params.id){
        const recipe = await getRecipeRequest(params.id)
        console.log(recipe.data)
        setRecipe(recipe.data)
      }
    }
    loadRecipe()
  


  }, [])

  return (
    <div>
       <div className='nav'>
          <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
      </div>
      <div  className='div'>

      <img src={require('../assets/comida.png')} alt="comida.png" />

      <h1 key={recipe?._id}>
        
        {recipe?.title}</h1>
      <p>{recipe?.tags}</p>
      <p>{recipe?.description}</p>
      <p>{recipe?.author.username}</p>
      <p>{recipe?.ingredients.measure_unit}</p>
      {/* <p>{recipe?.comment}</p> */}
      
    
      </div>
      
      <Layout />
    </div>
  )
}

export default RecetteDetail
