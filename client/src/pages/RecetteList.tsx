import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecipesRequest } from '../api/recep.api';
import RecipeCard from '../partials/RecipeCard';
import { Recipe } from '../types/Recipe';
import './styles/RecetteList.css'
function RecetteList() {
  const [recipes, setRecipe] = useState<Recipe[]>([])  
  useEffect(() => {
    async function loadRecipes() {
      const response = await getRecipesRequest()
      setRecipe(response.data)
    }
    loadRecipes()
  }, []);
  return (
    <div>
      <div className='recelist'>
          <img className='recetlist-img' src={require('../assets/recelist.png')} alt="mock image" />
          <button className='Wacth'>
            <img className='wacth-img' 
            src={require('../assets/play.png')} 
            alt="paly image" 
            />
            <Link to={'/social'}>Wacth</Link>
            </button>
      </div>
      <div className='mas'>
        <h2>Más votadas</h2>
      </div>

    <div className="card-container">
      {recipes.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe._id} />
      ))}
    </div>
    </div>
  )
}export default RecetteList