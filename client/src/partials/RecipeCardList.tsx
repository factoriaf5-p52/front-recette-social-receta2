import './styles/CardList.css';
import { useNavigate } from 'react-router-dom'

export type Recipe = {
    _id: any
    title: string;
    description: string;
    author: any;
    ingredientes: Array<any>;
    comment: string;
}

function RecipeCardSearch({ recipes }: any) {
    const navigate = useNavigate()

    return (
        <div className="card">
            <button onClick={() => navigate(`/RecetteDetail/${recipes._id}`)}>
                <img src={require('../assets/mock.png')} alt="mock image" />
                <h1>{recipes.title}</h1>
            </button>
        </div>
    )
}

export default RecipeCardSearch