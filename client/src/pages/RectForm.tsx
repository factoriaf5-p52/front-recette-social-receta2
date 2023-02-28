import  { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Form, Formik } from 'formik';
import { getRecipesRequest } from '../api/recep.api';

export type Recipe = {
  title: string;
  description: string;
  author: any;
  ingredientes: Array<any>;
  comment: string;
}

function RectForm() {

  const [recipe, setRecipe] = useState ()


useEffect(()=>{
  async function loadRecipe(){
  const response = await getRecipesRequest()
 
  console.log(response.data)
  }
   
   
    loadRecipe()
},[])


  return (
    <div>
      <h1>Nueva Receta</h1>
      <Formik 
      initialValues={{
        title: '',
        description: '',
        author: '',
        ingredientes: '',
        comment: '',
      }}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        {({handleChange, handleSubmit})=>(

        <Form onSubmit={handleSubmit}>

        <label>title</label>
        <input 
        type="text" 
        name='title' 
        placeholder='witer too'
        onChange={handleChange}
        />
        <br />
        <label>description</label>
        <input 
        type="text" 
        name='description' 
        placeholder='witer too'
        onChange={handleChange}
        />
        <br />
        <label>author</label>
        <input 
        type="text" 
        name='author' 
        placeholder='usuario'
        onChange={handleChange}
        />
        <br />
        <label>ingredientes</label>
        <input 
        type="text" 
        name='ingredientes' 
        placeholder='añade tus ingredientes'
        onChange={handleChange}
        />
        <br />
        <label>comment</label>
        <input 
        type="text" 
        name='comment' 
        placeholder='añade tus comment'
        onChange={handleChange}
        />

        

        <button>Save</button>
        </Form>
        )}
      </Formik>

    
      <Layout />
    </div>
  )
}

export default RectForm


