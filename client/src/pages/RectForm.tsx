// import React, { useEffect, useState } from 'react'
// import Layout from '../components/Layout'
// import { Formik } from 'formik';
// import { getRecipesRequest } from '../api/recep.api';

// export type Recipe = {
//   title: string;
//   description: string;
//   author: any;
//   ingredientes: Array<any>;
//   comment: string;
// }

// function RectForm() {

//   const [recipe, setRecipe] = useState ()


// useEffect(()=>{
//   async function loadRecipe(){
//   const response = await getRecipesRequest()
 
//   console.log(response.data)
//   }
   
   
//     loadRecipe()
// },[])


//   return (
//     <div>
      
//        <div className='nav'>
//           <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
//       </div>
//       <div className='nav'>

// <img className='img' src={require('../assets/Ellipse 4.png')} alt="" />
// </div>
//       <h1>RectForm</h1>
//       <div>
//      <Formik 
//         initialValues={{recipe}}
//         enableReinitialize={true}
//         onSubmit={async(values, actions)=>{
//             console.log(values);
//             if(params.id) {
//                 // console.log('update')
//                await updateUser(params.id, values)
//             } else {

//               await createUser(values);
//             }
//             setUser({
//               title: string;
//               description: string;
//               author: any;
//               ingredientes: Array<any>;
//               comment: string;
//             })
//            actions.resetForm()
//         }}
//         >
//             {({handleChange, handleSubmit, values, isSubmitting})=>(

//             <Form onSubmit={handleSubmit}>
//             <label>Gmail</label>
//             <input type="text" 
//             name='gmail'
//             placeholder='gmail' 
//             onChange={handleChange}
//             // value={values}
            
//             />
//             <label>password</label>
//             <textarea 
//             name='password' 
//             rows={3} 
//             placeholder= 'password' 
//             onChange={handleChange}>
//             </textarea>
//             <button type='submit'> {isSubmitting ? "Saving..." : "Save"}</button>
//             </Form>
//             )}
//         </Formik>
//       </div>
//       <Layout />
//     </div>
//   )
// }

// export default RectForm

import React from 'react'

export default function 
() {
  return (
    <div>
      
    </div>
  )
}
