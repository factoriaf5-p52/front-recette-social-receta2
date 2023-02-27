import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeRequest} from '../api/recep.api'
import Layout from '../components/Layout'
import RecetteCard from '../components/RecetteCard'


export type Recipe = {
  _id:string;
  title: string;
  description: string;
  username: string;
  tags: Array<any>;
  comment: string;
}


function RecetteDetail() {
  const [recipe, setRecipe] = useState <Recipe> ()

  const params = useParams ()
    console.log(params)

  useEffect(() => {
    const loadRecipe = async ()=>{
      if(params.id){
        const recipe = await getRecipeRequest(params.id)
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
      <h1 key={recipe?._id}>{recipe?.title}</h1>
      <p>{recipe?.tags}</p>
      <p>{recipe?.description}</p>
      <p>{recipe?.username}</p>
    
      </div>
      
      <Layout />
    </div>
  )
}

export default RecetteDetail
