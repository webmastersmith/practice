import fetch from 'node-fetch'

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => {
    console.log('res!!!!!', JSON.stringify(res.headers, null, 2))
    console.log('res headers', res.headers.get('Content-Type'))
    console.log('res headers', res.headers.get('Date'))
    return res.text()
  })
  .then((data) => {
    console.log('data!!!!', data)
  })
