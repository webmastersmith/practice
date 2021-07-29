import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const [bool, setBool] = useState(true)
  const [user, setUser] = useState('Bob')
  const [searchQuery, setSearchQuery] = useState('Bob')

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      )
      const json = await response.json()
      setUser(json[0])
    }
    fetchFunc()
  }, [searchQuery])

  return (
    <div>
      <GlobalStyles />
      <h1>{user?.username}</h1>
      <Box>
        {`My name is ${bool ? 'Bryon' : 'Smith'}`}
        <button onClick={() => setBool(!bool)}>Change Name</button>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <label htmlFor="">{searchQuery}</label>
      </Box>
    </div>
  )
}

export default App
