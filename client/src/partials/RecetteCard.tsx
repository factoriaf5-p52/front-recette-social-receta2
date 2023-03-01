import { useNavigate } from 'react-router-dom'

export type Recipe = {
  _id: any
  title: string;
  description: string;
  author: any;
  ingredientes: Array<any>;
  comment: string;
}

function RecetteCard({ recipes }: any) {
  console.log(recipes)

  const navigate = useNavigate()
  return (
    <div>
      <h1></h1>
      <button onClick={() => navigate(`/RecetteDetail/${recipes._id}`)}>Detail</button>
    </div>
  )
}

export default RecetteCard