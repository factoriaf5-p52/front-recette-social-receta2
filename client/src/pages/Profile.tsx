import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { getUsersRequest } from '../api/recep.api'
import Layout from '../components/Layout'

type Props = {
  id:any;
  username:string;
  password:string;
  email:string;
  shopping_List:string
}



function Profile() {

  const [user, setUsers] = useState<Props[]>  ([])

  useEffect(()=>{

  async function loadUsers(){
    const response = await getUsersRequest()
  setUsers(response.data)

    
  }  
  loadUsers()

}, [])

  return (
    <div>
      <h1>Profile</h1>
      {
          user.map(users => (
            <div>
              <p>{users.id}</p>
              <h3>{users.username}</h3>
              <p>{users.password}</p>
              <p>{users.email}</p>
              <p>{users.shopping_List}</p>
         
            </div>
          ))
        }


      <Layout />
    </div>
  )
}

export default Profile
