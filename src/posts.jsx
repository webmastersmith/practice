import React from 'react'
import withData from './withData'

const Posts = ({ data, email, name }) => (
  <div>
    <h1>{name}</h1>
    <h2>{email}</h2>
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p style={{ fontStyle: 'italic' }}>{post.body}</p>
        </div>
      ))}
    </div>
  </div>
)

export default withData(Posts)
