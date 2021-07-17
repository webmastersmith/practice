import React from 'react'
import withData from './withData'

const Users = ({ data }) => (
  <div>
    <h1>Users List</h1>
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  </div>
)

export default withData(Users)
