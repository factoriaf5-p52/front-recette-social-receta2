import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeRequest} from '../api/recep.api'

type Author = {
  username:string;
}

type Ingredient = {
  name:string;
  measure_unit:string;
}
type Comment = {
  title:string;
  statrs:number;
  comment:string;
}

export type Recipe = {
  _id:string;
  title: string;
  description: string;
  author:Author;
  comments: Comment[];
  ingredients:Ingredient[] 
  time:string 
  tags: Array<any>;
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

  const newLocal = <div>
    {recipe?.ingredients.map((ingredient: Ingredient, index: number) => <div key={index}>
      <p>{ingredient.name}</p>
      <p>{ingredient.measure_unit}</p>
    </div>
    )}
  </div>
  return (
    <div>
      
          <div className='nav'>
              <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
          </div>
          <div>
              <img src={require('../assets/comida.png')} alt="comida.png" />
          </div>
          <div>
              <h1 key={recipe?._id}>
                      {recipe?.title}</h1>
              <p>{recipe?.tags}</p>
              <p>{recipe?.description}</p>
              <p>{recipe?.author.username}</p>
              <p>{recipe?.time}</p>
          </div>
          <div  className='div'>      
              {recipe?.comments.map((comment:Comment, index:number)=>
              <div key={index}>
                    <p>{comment.title}</p>
                    <p>{comment.statrs}</p>
                    <p>{comment.comment}</p>
              </div>
            )}
          </div>
                    {newLocal}
    </div>
  )
}

export default RecetteDetail
