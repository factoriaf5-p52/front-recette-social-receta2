import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { getUsersRequest } from '../api/users.api'
import Layout from '../partials/Layout'

type Props = {
  _id?: any;
  username: string;
}

function Profile() {

  const [user, setUsers] = useState<Props[]>([])

  useEffect(() => {

    async function loadUsers() {
      const response = await getUsersRequest()
      setUsers(response.data)
      console.log(response)
    }
    loadUsers()

  }, [])

  return (
    <>
      <h1>Profile</h1>
      {
        user.map(users => (
          <div key={users._id}>
            <p>{users._id}</p>
            <h3>{users.username}</h3>
          </div>
        ))
      }
      <Layout />
    </>
  )
}

export default Profile
