import './styles/CardList.css';
import { useNavigate } from 'react-router-dom'

export type Recipe = {
    _id: string;
    title: string;
    time: number;
}

function RecipeCard({ recipes }: any) {
    const navigate = useNavigate()

    return (
        <div className="card">
            <button onClick={() => navigate(`/RecetteDetail/${recipes._id}`)}>
                <img src={require('../assets/mock.png')} alt="mock image" />
                <h1>{recipes.title}</h1>
                <p>{recipes.time}min</p>
            </button>
        </div>
    )
}

export default RecipeCard