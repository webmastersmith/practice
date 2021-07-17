import React from 'react'
import Posts from './posts'
import Users from './users'

const App = () => (
  <div className="App">
    <Posts
      name="Bryon"
      email="bryon@smithauto.us"
      dataSource="https://jsonplaceholder.typicode.com/posts/"
    />
    <Users dataSource="https://jsonplaceholder.typicode.com/users/" />
  </div>
)

export default App
